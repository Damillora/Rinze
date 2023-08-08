<script>
	import { PageHeader, Container, Post, PostMain } from '@damillora/plachta';
</script>

<svelte:head>
	<title>Damillora: Game Profile</title>
</svelte:head>

<Container>
	<Post>
		<PageHeader>
			<h1>Game Profile:</h1>
			<p><a href="/">Game Website</a></p>
		</PageHeader>

		<PostMain comments={false}>
			<h2>My Review</h2>
			<blockquote />
			<p><a href="/">Read more</a></p>
		</PostMain>
	</Post>
</Container>
