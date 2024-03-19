<script>
	import { page } from '$app/stores';
	import { Container, Post } from '@damillora/plachta';
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<Container>
	<Post>
		<h1>{$page.status}</h1>
		<p>{$page.error.message}</p>
	</Post>
</Container>

<style>
</style>
