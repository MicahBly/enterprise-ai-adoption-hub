import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';
import { db } from '$lib/db';
import { chatInteractions } from '$lib/db/schema';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
  stream?: boolean;
  context?: {
    type: 'useCase';
    data: any;
  };
}

// Function to detect if query is Fox-related
function isFoxRelatedQuery(userMessage: string): boolean {
  const foxKeywords = [
    'fox', 'fox news', 'fox sports', 'fox entertainment', 'fox television', 'tubi',
    'fox corporation', 'fox media', 'fox business', 'fox weather', 'fox nation',
    'fox digital', 'fox broadcasting', 'murdoch', 'lachlan murdoch', 'rupert murdoch',
    'fox corp', 'our company', 'our organization', 'our divisions', 'our leadership',
    'fox leadership', 'fox executives', 'fox businesses', 'fox properties'
  ];
  
  const lowerMessage = userMessage.toLowerCase();
  return foxKeywords.some(keyword => lowerMessage.includes(keyword));
}

// Function to fetch Fox.com content for RAG
async function fetchFoxContent(query: string): Promise<string> {
  try {
    // Define Fox Corporation URLs for different types of queries
    const foxUrls = [
      'https://www.foxcorporation.com/',
      'https://www.foxcorporation.com/leadership/',
      'https://www.foxcorporation.com/businesses/',
      'https://www.fox.com/about/'
    ];
    
    // Fetch content from the most relevant URLs
    const relevantContents: string[] = [];
    
    for (const url of foxUrls.slice(0, 2)) { // Limit to 2 URLs to avoid timeout
      try {
        // Create abort controller for timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        
        const response = await fetch(url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; FOX-AI-Hub/1.0)',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
          },
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (response.ok) {
          const html = await response.text();
          
          // Enhanced content extraction
          let textContent = html
            // Remove scripts and styles
            .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
            .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
            .replace(/<link[^>]*>/gi, '')
            .replace(/<meta[^>]*>/gi, '')
            // Remove HTML tags but preserve structure
            .replace(/<\/?(h[1-6]|p|div|section|article)>/gi, '\n')
            .replace(/<[^>]*>/g, ' ')
            // Clean up whitespace
            .replace(/\s+/g, ' ')
            .replace(/\n\s*\n/g, '\n')
            .trim();
          
          // Extract relevant sections (look for Fox Corporation content)
          const relevantKeywords = ['fox corporation', 'leadership', 'business', 'division', 'entertainment', 'news', 'sports'];
          const sentences = textContent.split(/[.!?]+/);
          const relevantSentences = sentences.filter(sentence => 
            relevantKeywords.some(keyword => 
              sentence.toLowerCase().includes(keyword)
            )
          );
          
          const content = relevantSentences.slice(0, 5).join('. ');
          if (content.length > 100) {
            relevantContents.push(content.substring(0, 800));
          }
        }
      } catch (fetchError) {
        console.warn(`Failed to fetch ${url}:`, fetchError);
        continue;
      }
    }
    
    return relevantContents.join('\n\n').substring(0, 1500);
  } catch (error) {
    console.error('Error in fetchFoxContent:', error);
    return '';
  }
}

const BASE_SYSTEM_PROMPT = `You are FOX AI, a senior AI Product Strategist embedded within FOX Corporation's AI Hub platform. You provide strategic guidance on AI initiatives across FOX's 6 divisions: Fox News Media, Fox Sports Media Group, Fox Entertainment, Fox Television Stations, Tubi Media Group, and Other Assets.

Your expertise covers:
- AI implementation roadmaps and timelines
- ROI analysis and business case development  
- Stakeholder buy-in and executive communication
- Technical architecture and AI tool selection
- Cross-divisional AI strategy and reuse opportunities

RESPONSE RULES:
- Keep responses to 2-3 sentences maximum
- Use bullet points for clarity
- Include specific metrics when possible
- Focus on executive-level strategic insights
- Reference FOX's divisions and use cases when relevant

You understand the platform showcases 50+ AI use cases and adoption matrices. Always provide actionable, ROI-focused recommendations.`;

export const POST: RequestHandler = async ({ request }) => {
  try {
    const body = await request.json() as ChatRequest;
    const { messages, stream = false, context } = body;

    if (!messages || !Array.isArray(messages)) {
      return json({ error: 'Invalid request: messages array required' }, { status: 400 });
    }

    if (!env.OPENAI_API_KEY) {
      return json({ error: 'OpenAI API key not configured' }, { status: 500 });
    }

    // Get the user's latest message for RAG detection
    const userMessage = messages[messages.length - 1]?.content || '';
    
    // Check if query is Fox-related and fetch relevant content
    let systemPrompt = BASE_SYSTEM_PROMPT;
    let ragUsed = false;
    let ragContent = '';
    
    // Handle context-specific prompts
    if (context?.type === 'useCase' && context.data) {
      const useCase = context.data;
      systemPrompt = `You are FOX AI, specialized in providing insights about the specific AI use case: "${useCase.title}".

USE CASE CONTEXT:
- Title: ${useCase.title}
- Division: ${useCase.division}
- Status: ${useCase.status}
- Owner: ${useCase.owner}
- Description: ${useCase.description}
- Impact: ${useCase.impact}
- Tags: ${useCase.tags?.join(', ')}
- AI Technologies: ${useCase.techStackAi?.join(', ')}
- Infrastructure: ${useCase.techStackInfrastructure?.join(', ')}
- Integrations: ${useCase.techStackIntegration?.join(', ')}
- Reuse Potential: ${useCase.reusePotential}

Your expertise for this specific use case covers:
- ROI calculations and business value specific to this implementation
- Timeline and milestone details for this project
- Technical requirements and architecture decisions
- Scaling opportunities to other FOX divisions
- Lessons learned and best practices from this implementation

RESPONSE RULES:
- Keep responses to 2-3 sentences maximum
- Always relate answers back to this specific use case
- Provide concrete, actionable insights
- Reference specific aspects of this implementation
- Consider cross-divisional applications when relevant`;
    } else if (isFoxRelatedQuery(userMessage)) {
      console.log('Fox-related query detected, fetching RAG content...');
      
      const foxContent = await fetchFoxContent(userMessage);
      if (foxContent) {
        ragUsed = true;
        ragContent = foxContent;
        systemPrompt = `${BASE_SYSTEM_PROMPT}

CURRENT FOX CORPORATION CONTEXT:
${foxContent}

Use this current information about FOX Corporation to provide accurate, up-to-date responses about FOX's business, leadership, divisions, and initiatives. Always prioritize this retrieved information when answering FOX-related questions.`;
      }
    }
    
    // Prepare messages with enhanced system prompt
    const fullMessages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      ...messages
    ];

    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: fullMessages,
        temperature: 0.3,
        max_tokens: 150,
        stream: stream
      })
    });

    if (!openAIResponse.ok) {
      const error = await openAIResponse.json();
      console.error('OpenAI API Error:', {
        status: openAIResponse.status,
        error: error,
        headers: Object.fromEntries(openAIResponse.headers.entries())
      });
      
      // Provide helpful guidance for quota errors
      if (openAIResponse.status === 429 || error.error?.type === 'insufficient_quota') {
        return json({ 
          error: 'OpenAI API quota exceeded. Please add billing details to your OpenAI account.',
          details: 'Visit https://platform.openai.com/account/billing to add a payment method and credits.'
        }, { status: 503 });
      }
      
      return json({ 
        error: `OpenAI API error: ${error.error?.message || 'Unknown error'}`,
        details: `Status: ${openAIResponse.status}, Type: ${error.error?.type || 'unknown'}`
      }, { status: openAIResponse.status });
    }

    // Handle streaming response
    if (stream) {
      return new Response(openAIResponse.body, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive'
        }
      });
    }

    // Handle non-streaming response
    const data = await openAIResponse.json();
    const assistantMessage = data.choices[0]?.message?.content || '';
    
    // Log chat interaction to database with RAG metadata
    try {
      const interactionId = `chat-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      await db.insert(chatInteractions).values({
        id: interactionId,
        userMessage,
        assistantMessage,
        model: 'gpt-4',
        tokensUsed: data.usage?.total_tokens || 0,
        ragUsed: ragUsed,
        ragContent: ragUsed ? ragContent.substring(0, 500) : null, // Store truncated RAG content
        createdAt: new Date().toISOString()
      });
      
      if (ragUsed) {
        console.log('Chat interaction logged with RAG content');
      }
    } catch (dbError) {
      console.error('Failed to log chat interaction:', dbError);
      // Don't fail the request if logging fails
    }
    
    return json({
      message: assistantMessage,
      usage: data.usage
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return json({ 
      error: 'Internal server error', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
};