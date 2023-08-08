<script>
	import { PageHeader, Container, Post, PostMain } from '@damillora/plachta';
</script>

<svelte:head>
	<title>Damillora: Game Profile</title>
</svelte:head>

<Container>
	<Post>
		<PageHeader>
            <h1>Game Profile: 欅坂46・日向坂46 UNI'S ON AIR</h1>
            <p><a href="https://keyahina-unisonair.com/">Game Website</a></p>
		</PageHeader>

		<PostMain comments={false}>
            <h2>My Review</h2>
            <blockquote>
                Suffice to say, I enjoy this game more than Nogizaka46's rhythm
                game, which requires memorization of songs a bit too much.
            </blockquote>
            <p>
                <a
                    href="https://blog.nanao.moe/game-reviews/keyakizaka46-hinatazaka46-unis-on-air/"
                    >Read more</a
                >
            </p>
		</PostMain>
	</Post>
</Container>