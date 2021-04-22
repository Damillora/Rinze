<script>
	import PageHeader from 'components/PageHeader.svelte';

	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class="page">
	<PageHeader>
		<h1 class="page-header__heading">{status}</h1>
		<p class="page-header__text">{error.message}</p>
	</PageHeader>
	{#if dev && error.stack}
		<pre>{error.stack}</pre>
	{/if}
</div>



