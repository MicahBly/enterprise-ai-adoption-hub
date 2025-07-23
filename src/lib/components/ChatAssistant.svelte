<script lang="ts">
  import { onMount, afterUpdate } from 'svelte';
  import { marked } from 'marked';
  import { base } from '$app/paths';
  import Tooltip from '$lib/components/ui/Tooltip.svelte';

  export let embedded = false;

  interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
  }

  // Example questions for quick start
  const exampleQuestions = [
    "How do I calculate ROI for AI initiatives?",
    "What's the typical timeline for computer vision implementation?",
    "How do I get executive buy-in for AI projects?",
    "Which AI tools have highest adoption at FOX?",
    "What are common AI implementation risks to mitigate?"
  ];

  let messages: Message[] = [];
  let inputValue = '';
  let isLoading = false;
  let error: string | null = null;
  let chatContainer: HTMLDivElement;
  let textInput: HTMLTextAreaElement;

  // Configure marked options
  marked.setOptions({
    breaks: true,
    gfm: true,
    pedantic: false
  });

  // Auto-scroll to bottom when new messages arrive
  afterUpdate(() => {
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  });

  // Handle auto-resize of textarea
  function handleTextareaInput() {
    if (textInput) {
      textInput.style.height = 'auto';
      textInput.style.height = Math.min(textInput.scrollHeight, 200) + 'px';
    }
  }

  // Generate unique ID for messages
  function generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  // Send message to chat API
  async function sendMessage(content: string) {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = {
      id: generateId(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date()
    };

    messages = [...messages, userMessage];
    inputValue = '';
    isLoading = true;
    error = null;

    // Reset textarea height
    if (textInput) {
      textInput.style.height = 'auto';
    }

    try {
      const response = await fetch(`${base}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: messages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }

      const assistantMessage: Message = {
        id: generateId(),
        role: 'assistant',
        content: data.message || 'Sorry, I couldn\'t generate a response.',
        timestamp: new Date()
      };

      messages = [...messages, assistantMessage];
    } catch (err) {
      error = err instanceof Error ? err.message : 'An unexpected error occurred';
      console.error('Chat error:', err);
    } finally {
      isLoading = false;
    }
  }

  // Handle form submission
  function handleSubmit(e: Event) {
    e.preventDefault();
    sendMessage(inputValue);
  }

  // Handle example question click
  function handleExampleClick(question: string) {
    inputValue = question;
    if (textInput) {
      textInput.focus();
      handleTextareaInput();
    }
  }

  // Handle enter key (submit on Enter, new line on Shift+Enter)
  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  }

  // Clear chat history
  function clearChat() {
    messages = [];
    error = null;
  }

  // Format timestamp
  function formatTime(date: Date): string {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  }

  onMount(() => {
    // Focus input on mount
    if (textInput) {
      textInput.focus();
    }
  });
</script>

<div class="flex flex-col h-full {embedded ? 'max-h-[600px]' : 'max-h-[800px]'} bg-[var(--color-surface)] {embedded ? '' : 'rounded-[var(--radius-xl)] shadow-[var(--shadow-xl)]'} overflow-hidden">
  <!-- Header -->
  {#if !embedded}
    <div class="flex items-center justify-between px-6 py-4 bg-[var(--color-fox-primary)] text-white">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
        <div>
          <Tooltip content="AI assistant trained on FOX's best practices, use cases, and implementation patterns" placement="bottom">
            <h2 class="text-xl font-semibold">FOX AI Assistant</h2>
          </Tooltip>
          <p class="text-sm opacity-100">Your digital marketing expert</p>
        </div>
      </div>
      {#if messages.length > 0}
        <Tooltip content="Start fresh conversation - all chats are private and not stored" placement="bottom">
          <button
            on:click={clearChat}
            class="text-white/80 hover:text-white transition-colors"
            aria-label="Clear chat"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </Tooltip>
      {/if}
    </div>
  {/if}

  <!-- Embedded Header with Clear Button -->
  {#if embedded && messages.length > 0}
    <div class="flex justify-end px-4 pt-2">
      <Tooltip content="Clear conversation" placement="bottom">
        <button
          on:click={clearChat}
          class="text-gray-600 hover:text-gray-700 transition-colors text-sm flex items-center gap-1"
          aria-label="Clear chat"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Clear
        </button>
      </Tooltip>
    </div>
  {/if}

  <!-- Chat Messages -->
  <div 
    bind:this={chatContainer}
    class="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin"
  >
    {#if messages.length === 0}
      <!-- Welcome message and examples -->
      <div class="flex flex-col items-center justify-center h-full text-center py-8">
        <div class="max-w-md mx-auto">
          <svg class="w-16 h-16 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
          <h3 class="text-2xl font-semibold mb-2 text-gray-900">Welcome to FOX AI!</h3>
          <p class="text-gray-700 mb-6">
            I'm here to help you with AI strategies, implementation guidance, ROI analysis, and strategic planning. Ask me anything!
          </p>
          
          <div class="space-y-3">
            <Tooltip content="Strategic conversation starters designed for executives and product leaders" placement="top">
              <p class="text-sm text-gray-700 mb-4 font-medium">Try one of these questions:</p>
            </Tooltip>
            {#each exampleQuestions as question}
              <button
                on:click={() => handleExampleClick(question)}
                class="w-full text-left px-4 py-3 bg-white hover:bg-blue-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-200 text-sm text-gray-700 hover:text-blue-700 shadow-sm hover:shadow-md"
              >
                {question}
              </button>
            {/each}
          </div>
        </div>
      </div>
    {:else}
      <!-- Message list -->
      {#each messages as message (message.id)}
        <div class="flex {message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in">
          <div class="max-w-[80%] md:max-w-[70%]">
            <div class="flex items-end gap-2 {message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}">
              <!-- Avatar -->
              <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center {message.role === 'user' ? 'bg-[var(--color-fox-primary)]' : 'bg-[var(--color-surface-secondary)]'}">
                {#if message.role === 'user'}
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                {:else}
                  <svg class="w-5 h-5 text-[var(--color-fox-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                {/if}
              </div>
              
              <!-- Message bubble -->
              <div class="{message.role === 'user' ? 'bg-[var(--color-fox-primary)] text-white' : 'bg-[var(--color-background)] border border-[var(--color-border)]'} px-4 py-3 rounded-[var(--radius-lg)] {message.role === 'user' ? 'rounded-br-[var(--radius-sm)]' : 'rounded-bl-[var(--radius-sm)]'}">
                {#if message.role === 'assistant'}
                  <div class="prose prose-sm max-w-none dark:prose-invert">
                    {@html marked(message.content)}
                  </div>
                {:else}
                  <p class="whitespace-pre-wrap">{message.content}</p>
                {/if}
                <p class="text-xs {message.role === 'user' ? 'text-white' : 'text-[var(--color-text-muted)]'} mt-1">
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          </div>
        </div>
      {/each}

      <!-- Loading indicator -->
      {#if isLoading}
        <div class="flex justify-start animate-fade-in">
          <div class="max-w-[80%] md:max-w-[70%]">
            <div class="flex items-end gap-2">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-surface-secondary)] flex items-center justify-center">
                <svg class="w-5 h-5 text-[var(--color-fox-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="bg-[var(--color-background)] border border-[var(--color-border)] px-4 py-3 rounded-[var(--radius-lg)] rounded-bl-[var(--radius-sm)]">
                <div class="flex items-center gap-2">
                  <div class="animate-pulse flex gap-1">
                    <div class="w-2 h-2 bg-[var(--color-fox-primary)] rounded-full animate-bounce" style="animation-delay: 0ms"></div>
                    <div class="w-2 h-2 bg-[var(--color-fox-primary)] rounded-full animate-bounce" style="animation-delay: 150ms"></div>
                    <div class="w-2 h-2 bg-[var(--color-fox-primary)] rounded-full animate-bounce" style="animation-delay: 300ms"></div>
                  </div>
                  <span class="text-sm text-[var(--color-text-muted)]">FOX AI is thinking...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/if}
    {/if}
  </div>

  <!-- Error message -->
  {#if error}
    <div class="mx-4 mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-[var(--radius-md)] text-red-700 dark:text-red-400 text-sm animate-slide-in-up">
      <div class="flex items-center gap-2">
        <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p>{error}</p>
      </div>
    </div>
  {/if}

  <!-- Input Form -->
  <form on:submit={handleSubmit} class="p-6 bg-white border-t border-gray-200">
    <div class="flex gap-3 items-end">
      <div class="flex-1 relative">
        <Tooltip content="Ask about ROI calculations, implementation timelines, stakeholder buy-in, or technical architecture" placement="top">
          <textarea
            bind:this={textInput}
            bind:value={inputValue}
            on:input={handleTextareaInput}
            on:keydown={handleKeydown}
            placeholder="Ask about AI strategy, ROI, implementation timelines..."
            disabled={isLoading}
            rows="1"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 resize-none pr-16 min-h-[48px] max-h-[200px] disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
            style="height: 48px;"
          />
        </Tooltip>
        <div class="absolute right-3 bottom-3 text-xs text-gray-700">
          {#if inputValue.length > 0}
            <span>{inputValue.length}</span>
          {/if}
        </div>
      </div>
      <Tooltip content="Get instant AI-powered insights tailored to FOX's context" placement="top">
        <button
          type="submit"
          disabled={!inputValue.trim() || isLoading}
          class="bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 inline-flex items-center justify-center px-4 py-2 border rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 h-[48px] px-6"
          aria-label="Send message"
        >
          {#if isLoading}
            <svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          {:else}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          {/if}
        </button>
      </Tooltip>
    </div>
    <p class="text-xs text-gray-700 mt-3">
      Press Enter to send, Shift+Enter for new line
    </p>
  </form>
</div>

<style>
  /* Custom styles for markdown content */
  :global(.prose) {
    color: var(--color-text-primary);
  }
  
  :global(.prose h1),
  :global(.prose h2),
  :global(.prose h3),
  :global(.prose h4),
  :global(.prose h5),
  :global(.prose h6) {
    color: var(--color-text-primary);
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
  
  :global(.prose p) {
    margin-bottom: 0.75em;
  }
  
  :global(.prose ul),
  :global(.prose ol) {
    margin-left: 1.5em;
    margin-bottom: 0.75em;
  }
  
  :global(.prose li) {
    margin-bottom: 0.25em;
  }
  
  :global(.prose code) {
    background-color: var(--color-surface-secondary);
    padding: 0.125em 0.375em;
    border-radius: var(--radius-sm);
    font-size: 0.875em;
    color: var(--color-fox-primary);
  }
  
  :global(.prose pre) {
    background-color: var(--color-surface-secondary);
    padding: 1em;
    border-radius: var(--radius-md);
    overflow-x: auto;
    margin-bottom: 0.75em;
  }
  
  :global(.prose pre code) {
    background-color: transparent;
    padding: 0;
    color: var(--color-text-primary);
  }
  
  :global(.prose a) {
    color: var(--color-fox-primary);
    text-decoration: underline;
  }
  
  :global(.prose a:hover) {
    color: var(--color-fox-primary-dark);
  }
  
  :global(.prose blockquote) {
    border-left: 4px solid var(--color-fox-primary);
    padding-left: 1em;
    margin-left: 0;
    margin-bottom: 0.75em;
    color: var(--color-text-secondary);
    font-style: italic;
  }
  
  :global(.prose strong) {
    font-weight: 600;
    color: var(--color-text-primary);
  }
  
  :global(.prose table) {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 0.75em;
  }
  
  :global(.prose th),
  :global(.prose td) {
    border: 1px solid var(--color-border);
    padding: 0.5em;
    text-align: left;
  }
  
  :global(.prose th) {
    background-color: var(--color-surface-secondary);
    font-weight: 600;
  }
  
  /* Animation for bouncing dots */
  @keyframes bounce {
    0%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-8px);
    }
  }
</style>