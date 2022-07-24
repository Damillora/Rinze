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
			<h1>Game Profile: ARGONAVIS from BanG Dream! AAside</h1>
			<p><a href="https://aaside.bushimo.jp">Game Website</a></p>
		</PageHeader>

		<PostMain comments={false}>
			<h2>My Review</h2>
			<blockquote>
				My take on it? Give it some time. AAside is actually quite aesthetically polished, it has
				stand-out features, and the rhythm gameplay is okay. However, there are definitely valid
				concerns and missing features that I understand can be a game-breaker for some.
			</blockquote>
			<p>
				<a href="https://blog.nanao.moe/game-reviews/argonavis-from-bang-dream-aaside/">Read more</a
				>
			</p>
		</PostMain>
	</Post>
</Container>
