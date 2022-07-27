<script>
	import PageHeader from '@damillora/plachta/components/PageHeader/PageHeader.svelte';
	import Container from '@damillora/plachta/components/Container/Container.svelte';
	import Post from '@damillora/plachta/components/PageTypes/Post.svelte';
	import PostMain from '@damillora/plachta/components/Post/PostMain.svelte';
</script>

<svelte:head>
	<title>Damillora: Game Profile</title>
</svelte:head>

<Container>
	<Post>
		<PageHeader>
			<h1>Game Profile: Alice Fiction</h1>
			<p><a href="alice-fiction.com/en/">Game Website</a></p>
		</PageHeader>

		<!-- <PostMain comments={false}>
			<h2>My Review</h2>
			<blockquote />
			<p><a href="/">Read more</a></p>
		</PostMain> -->
	</Post>
</Container>
