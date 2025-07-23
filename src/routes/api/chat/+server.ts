import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';

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

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { messages, context } = await request.json() as ChatRequest;
    
    // Check if OpenAI API key is configured
    const openaiKey = env.OPENAI_API_KEY;
    if (!openaiKey) {
      return json({ 
        error: 'Chat functionality is not configured. Please set OPENAI_API_KEY environment variable.' 
      }, { status: 503 });
    }

    // Prepare the messages for the API
    const systemMessage = {
      role: 'system',
      content: `You are an AI assistant helping with enterprise AI adoption strategies and use cases. 
        Be helpful, specific, and provide actionable insights. When discussing use cases, 
        focus on practical implementation details and potential business value.`
    };

    // Add context if provided
    let contextMessage = null;
    if (context && context.type === 'useCase' && context.data) {
      contextMessage = {
        role: 'system',
        content: `The user is asking about the following use case:
          Title: ${context.data.title}
          Division: ${context.data.division}
          Description: ${context.data.description}
          Impact: ${context.data.impact}
          Tech Stack: AI - ${context.data.techStackAi}, Infrastructure - ${context.data.techStackInfrastructure}
          Please provide specific insights about this use case when responding.`
      };
    }

    // Construct the full message array
    const apiMessages = [
      systemMessage,
      ...(contextMessage ? [contextMessage] : []),
      ...messages
    ];

    // Make the API call to OpenAI
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4-turbo-preview',
        messages: apiMessages,
        temperature: 0.7,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('OpenAI API error:', error);
      return json({ 
        error: 'Failed to get response from AI service' 
      }, { status: response.status });
    }

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;

    // Note: In production, we're not saving chat interactions to database
    // Could implement client-side storage if history is needed

    return json({
      message: assistantMessage,
      usage: data.usage
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return json({ 
      error: 'An error occurred while processing your request' 
    }, { status: 500 });
  }
};