<script>
	import { PageHeader, Container, Post, PostMain } from '@damillora/plachta';
</script>

<svelte:head>
	<title>Damillora: Game Profile</title>
</svelte:head>

<Container>
	<Post>
		<PageHeader>
			<h1>Game Profile: Counter:Side</h1>
			<p>
				<a href="https://counterside.zlongame.com/">Game Website</a>
			</p>
		</PageHeader>

		<PostMain comments={false}>
			<h2>My Review</h2>
			<blockquote>
				In conclusion, Counter:Side is a pretty fun game to play, if that's your thing. This is not
				in a genre that I usually play nor it's something that I feel emotionally invested in, but I
				think it's worth a try.
			</blockquote>
			<p><a href="//blog.nanao.moe/game-reviews/counter-side/">Read more</a></p>
		</PostMain>
	</Post>
</Container>
