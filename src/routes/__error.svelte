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
	import PageHeader from '$lib/components/PageHeader.svelte';

	export let status;
	export let error;
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class="page">
	<PageHeader>
		<h1 class="page-header__heading">{status}</h1>
		<p class="page-header__text">{error.message}</p>
	</PageHeader>
	<main class="container main">
		{#if error.stack}
			<pre>{error.stack}</pre>
		{/if}
	</main>
</div>

<style>
</style>
