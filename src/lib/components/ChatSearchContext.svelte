<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import { marked } from 'marked';
	import { base } from '$app/paths';
	import Tooltip from './ui/Tooltip.svelte';

	interface Message {
		id: string;
		role: 'user' | 'assistant';
		content: string;
		timestamp: Date;
	}

	export let context: {
		type: 'useCase';
		data: any;
	} | null = null;

	let searchInput = '';
	let inputElement: HTMLInputElement;
	let messages: Message[] = [];
	let isLoading = false;
	let error: string | null = null;
	let chatContainer: HTMLDivElement;

	// Example prompts for quick suggestions - context aware
	$: examplePrompts = context?.type === 'useCase' ? [
		"ROI calculation for this use case",
		"Implementation timeline",
		"Technical requirements",
		"Similar implementations"
	] : [
		"ROI calculation",
		"AI implementation timeline",
		"Best practices",
		"Use case examples"
	];

	// Configure marked options
	marked.setOptions({
		breaks: true,
		gfm: true,
		pedantic: false
	});

	// Auto-scroll to bottom when new messages arrive
	afterUpdate(() => {
		if (chatContainer && messages.length > 0) {
			chatContainer.scrollTop = chatContainer.scrollHeight;
		}
	});

	// Generate unique ID for messages
	function generateId(): string {
		return Date.now().toString(36) + Math.random().toString(36).substr(2);
	}

	// Send message to chat API with context
	async function sendMessage(content: string) {
		if (!content.trim() || isLoading) return;

		const userMessage: Message = {
			id: generateId(),
			role: 'user',
			content: content.trim(),
			timestamp: new Date()
		};

		messages = [...messages, userMessage];
		searchInput = '';
		isLoading = true;
		error = null;

		try {
			// Prepare messages with context if available
			const apiMessages = messages.map(msg => ({
				role: msg.role,
				content: msg.content
			}));

			// Add context to the request if available
			const requestBody: any = {
				messages: apiMessages
			};

			if (context) {
				requestBody.context = context;
			}

			const response = await fetch(`${base}/api/chat`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(requestBody)
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

	// Handle search submission
	function handleSearch() {
		if (searchInput.trim()) {
			sendMessage(searchInput);
		}
	}

	// Handle key events
	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSearch();
		}
	}

	// Handle prompt click
	function handlePromptClick(prompt: string) {
		searchInput = prompt;
		if (inputElement) {
			inputElement.focus();
		}
	}

	// Clear chat history
	function clearChat() {
		messages = [];
		error = null;
		searchInput = '';
		if (inputElement) {
			inputElement.focus();
		}
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
		// Focus on input when component mounts
		if (inputElement) {
			inputElement.focus();
		}
	});
</script>

<div class="w-full">
	<!-- Search Bar -->
	<div class="bg-white rounded-xl shadow-lg border border-gray-200 transition-all duration-300">
		<div class="relative">
			<div class="flex items-center gap-3 p-4">
				<!-- AI Icon -->
				<div class="flex-shrink-0">
					<div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm transform transition-transform duration-200 hover:scale-105">
						<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
					</div>
				</div>

				<!-- Search Input -->
				<div class="flex-1">
					<div class="relative">
						<input
							bind:this={inputElement}
							bind:value={searchInput}
							on:keydown={handleKeydown}
							type="text"
							placeholder={context?.type === 'useCase' 
								? `Ask about ${context.data.title}...`
								: "Ask FOX AI anything about AI implementation, ROI, best practices..."}
							disabled={isLoading}
							class="w-full pl-10 pr-4 py-2 text-gray-900 placeholder-gray-700 border-0 focus:outline-none focus:ring-0 text-base disabled:opacity-50"
						/>
						<svg class="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</div>
					
					<!-- Quick prompts (only show when no messages) -->
					{#if messages.length === 0 && !searchInput}
						<div class="flex flex-wrap gap-2 mt-2">
							<span class="text-xs text-gray-700">Try:</span>
							{#each examplePrompts as prompt}
								<button
									on:click={() => handlePromptClick(prompt)}
									class="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
								>
									{prompt}
								</button>
							{/each}
						</div>
					{/if}
				</div>

				<!-- Action Buttons -->
				<div class="flex items-center gap-2">
					{#if searchInput.trim() && !isLoading}
						<Tooltip content="Send message" placement="bottom">
							<button
								on:click={handleSearch}
								class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors flex items-center gap-2"
							>
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
								</svg>
								Send
							</button>
						</Tooltip>
					{/if}

					{#if isLoading}
						<div class="px-4 py-2 text-gray-700 text-sm flex items-center gap-2">
							<svg class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
							</svg>
							Thinking...
						</div>
					{/if}

					{#if messages.length > 0}
						<Tooltip content="Clear conversation" placement="bottom">
							<button
								on:click={clearChat}
								class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
								aria-label="Clear chat"
							>
								<svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
								</svg>
							</button>
						</Tooltip>
					{/if}
				</div>
			</div>
		</div>
	</div>

	<!-- Chat Messages (shown below search bar when there are messages) -->
	{#if messages.length > 0}
		<div 
			transition:slide={{ duration: 300 }}
			class="mt-4 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
		>
			<div 
				bind:this={chatContainer}
				class="max-h-[400px] overflow-y-auto p-4 space-y-4"
			>
				{#each messages as message (message.id)}
					<div class="flex {message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in">
						<div class="max-w-[80%]">
							<div class="flex items-start gap-2 {message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}">
								<!-- Avatar -->
								<div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center {message.role === 'user' ? 'bg-blue-600' : 'bg-gray-100'}">
									{#if message.role === 'user'}
										<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
										</svg>
									{:else}
										<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
									{/if}
								</div>
								
								<!-- Message bubble -->
								<div class="{message.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100'} px-4 py-3 rounded-lg {message.role === 'user' ? 'rounded-br-sm' : 'rounded-bl-sm'}">
									{#if message.role === 'assistant'}
										<div class="prose prose-sm max-w-none">
											{@html marked(message.content)}
										</div>
									{:else}
										<p class="whitespace-pre-wrap">{message.content}</p>
									{/if}
									<p class="text-xs {message.role === 'user' ? 'text-blue-100' : 'text-gray-700'} mt-1">
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
						<div class="max-w-[80%]">
							<div class="flex items-start gap-2">
								<div class="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
									<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
								</div>
								<div class="bg-gray-100 px-4 py-3 rounded-lg rounded-bl-sm">
									<div class="flex items-center gap-2">
										<div class="animate-pulse flex gap-1">
											<div class="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
											<div class="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
											<div class="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>

			<!-- Error message -->
			{#if error}
				<div class="mx-4 mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
					<div class="flex items-center gap-2">
						<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						<p>{error}</p>
					</div>
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	/* Remove default input focus styles */
	input:focus {
		outline: none;
		box-shadow: none;
	}

	/* Custom styles for markdown content */
	:global(.prose) {
		color: #374151;
	}
	
	:global(.prose h1),
	:global(.prose h2),
	:global(.prose h3),
	:global(.prose h4),
	:global(.prose h5),
	:global(.prose h6) {
		color: #111827;
		margin-top: 0.5em;
		margin-bottom: 0.25em;
	}
	
	:global(.prose p) {
		margin-bottom: 0.5em;
	}
	
	:global(.prose ul),
	:global(.prose ol) {
		margin-left: 1.5em;
		margin-bottom: 0.5em;
	}
	
	:global(.prose li) {
		margin-bottom: 0.25em;
	}
	
	:global(.prose code) {
		background-color: #f3f4f6;
		padding: 0.125em 0.375em;
		border-radius: 0.25rem;
		font-size: 0.875em;
		color: #2563eb;
	}
	
	:global(.prose pre) {
		background-color: #f3f4f6;
		padding: 1em;
		border-radius: 0.5rem;
		overflow-x: auto;
		margin-bottom: 0.5em;
	}
	
	:global(.prose pre code) {
		background-color: transparent;
		padding: 0;
		color: #374151;
	}
	
	:global(.prose a) {
		color: #2563eb;
		text-decoration: underline;
	}
	
	:global(.prose a:hover) {
		color: #1d4ed8;
	}
	
	:global(.prose blockquote) {
		border-left: 4px solid #2563eb;
		padding-left: 1em;
		margin-left: 0;
		margin-bottom: 0.5em;
		color: #6b7280;
		font-style: italic;
	}
	
	:global(.prose strong) {
		font-weight: 600;
		color: #111827;
	}

	/* Animation */
	@keyframes bounce {
		0%, 80%, 100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-4px);
		}
	}

	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(4px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	:global(.animate-fade-in) {
		animation: fade-in 0.3s ease-out;
	}
</style>