<script>
	import { PageHeader, Container, Post, PostMain } from '@damillora/plachta';
</script>

<svelte:head>
	<title>Damillora: Game Profile</title>
</svelte:head>

<Container>
	<Post>
		<PageHeader>
			<h1>Game Profile: THE iDOLM@STER POPLINKS</h1>
			<p>
				<a href="https://poplinks.idolmaster-official.jp/">Game Website</a>
			</p>
		</PageHeader>

		<PostMain comments={false}>
			<h2>My Review</h2>
			<blockquote>
				Overall, POPLINKS is an exciting game where you can see all five branches of THE iDOLM@STER
				together in the first game ever to do so, where you can play either casually or
				competitively, and fully immerse yourself in your favorite idols. It is quite something.
			</blockquote>
			<p>
				<a href="https://blog.nanao.moe/game-reviews/the-idolmaster-poplinks/">Read more</a>
			</p>
		</PostMain>
	</Post>
</Container>
