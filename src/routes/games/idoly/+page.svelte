<script>
	import { PageHeader, Container, Post, PostMain } from '@damillora/plachta';
</script>

<svelte:head>
	<title>Damillora: Game Profile</title>
</svelte:head>

<Container>
	<Post>
		<PageHeader>
			<h1>Game Profile: IDOLY PRIDE</h1>
			<p>
				<a href="https://idolypride.jp/game/">Game Website</a>
			</p>
		</PageHeader>

		<PostMain comments={false}>
			<h2>My Review</h2>
			<blockquote>
				In conclusion, IDOLY PRIDE is the go-to side game when you are starting in the morning or
				late night when you are finished with just about everything that day.
			</blockquote>
			<p><a href="https://blog.nanao.moe/game-reviews/idoly-pride">Read more</a></p>
		</PostMain>
	</Post>
</Container>
