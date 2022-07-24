<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				status: status,
				error: error
			}
		};
	}
</script>

<script>
	import Container from '@damillora/plachta/components/Container/Container.svelte';

	export let status;
	export let error;
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<Container>
	<h1>{status}</h1>
	<p>{error.message}</p>

	{#if error.stack}
		<pre>{error.stack}</pre>
	{/if}
</Container>

<style>
</style>
