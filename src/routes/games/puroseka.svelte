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
			<h1>Game Profile: Project SEKAI COLORFUL STAGE!</h1>
			<p><a href="https://pjsekai.sega.jp/">Game Website</a></p>
		</PageHeader>

		<PostMain comments={false}>
			<h2>My Review</h2>
			<blockquote>
				Overall, I've gotten what I wanted to see in a mobile rhythm game. Virtual Lives are also
				very interesting with many possibilities that can happen. The other aspects are cherry on
				top, and they're also not bad too. Project SEKAI is great.
			</blockquote>
			<p>
				<a href="https://blog.nanao.moe/game-reviews/project-sekai-colorful-stage/">Read more</a>
			</p>
		</PostMain>
	</Post>
</Container>
