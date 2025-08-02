import { json } from "@sveltejs/kit";
import { d as private_env } from "../../../../chunks/shared-server.js";
const POST = async ({ request }) => {
  try {
    const { messages, context } = await request.json();
    const openaiKey = private_env.OPENAI_API_KEY;
    if (!openaiKey) {
      return json({
        error: "Chat functionality is not configured. Please set OPENAI_API_KEY environment variable."
      }, { status: 503 });
    }
    const systemMessage = {
      role: "system",
      content: `You are an AI assistant helping with enterprise AI adoption strategies and use cases. 
        Be helpful, specific, and provide actionable insights. When discussing use cases, 
        focus on practical implementation details and potential business value.`
    };
    let contextMessage = null;
    if (context && context.type === "useCase" && context.data) {
      contextMessage = {
        role: "system",
        content: `The user is asking about the following use case:
          Title: ${context.data.title}
          Division: ${context.data.division}
          Description: ${context.data.description}
          Impact: ${context.data.impact}
          Tech Stack: AI - ${context.data.techStackAi}, Infrastructure - ${context.data.techStackInfrastructure}
          Please provide specific insights about this use case when responding.`
      };
    }
    const apiMessages = [
      systemMessage,
      ...contextMessage ? [contextMessage] : [],
      ...messages
    ];
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${openaiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4-turbo-preview",
        messages: apiMessages,
        temperature: 0.7,
        max_tokens: 1e3
      })
    });
    if (!response.ok) {
      const error = await response.json();
      console.error("OpenAI API error:", error);
      return json({
        error: "Failed to get response from AI service"
      }, { status: response.status });
    }
    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;
    return json({
      message: assistantMessage,
      usage: data.usage
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return json({
      error: "An error occurred while processing your request"
    }, { status: 500 });
  }
};
export {
  POST
};
