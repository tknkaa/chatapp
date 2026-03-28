<script lang="ts">
	import { goto } from '$app/navigation';
	import { authClient } from '$lib/auth-client';
	import { onMount } from 'svelte';

	let isLoading = $state(true);
	onMount(async () => {
		const { data: session } = await authClient.getSession();
		if (session) {
			goto('/chat');
		} else {
			isLoading = false;
		}
	});
</script>

<h1>Chat App</h1>

{#if isLoading}
	<div>loading</div>
{:else}
	<div>
		<button onclick={() => goto('/login')}> login </button>
	</div>

	<div>
		<button onclick={() => goto('/signup')}> signup </button>
	</div>
{/if}
