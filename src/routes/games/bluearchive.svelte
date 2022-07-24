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
			<h1>Game Profile: Blue Archive</h1>
			<p><a href="https://bluearchive.jp/">Game Website</a></p>
		</PageHeader>

		<PostMain comments={false}>
			<h2>My Review</h2>
			<blockquote>
				In conclusion, Blue Archive is one of those games that I would actually play daily. While
				the gameplay is all familiar, it doesn't screw it up either. I also have grown attached to
				the students cast, and it is a reason for me to continue playing. However, its series of
				early problems and maintenances does hurt it a little. Personally, I really don't find much
				problems playing the game, but your mileage might vary, and if you find its early problems
				too much, please wait a little longer.
			</blockquote>
			<p>
				<a href="https://blog.nanao.moe/game-reviews/blue-archive/">Read more</a>
			</p>
		</PostMain>
	</Post>
</Container>
