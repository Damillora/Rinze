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
			<h1>Game Profile: CUE!</h1>
			<p><a href="https://www.cue-liber.jp/">Game Website</a></p>
		</PageHeader>

		<PostMain comments={false}>
			<h2>My Review</h2>
			<h3>One Year of CUE!</h3>
			<blockquote>
				Overall, since the game was released, CUE! has improved a lot, with some areas receiving a
				welcome UX improvement, convenience features that make CUE!'s idle aspect not feel like
				wasting time, and an entirely new mode for those who want something that feels more like
				actual gameplay. Here's to hoping that CUE! will continue to improve and move forward.
				<br /><br />
				For those who haven't played CUE! yet, there's no better time than now! It's one of the games
				that will take just a little bit of your time. It also requires no significant time investments
				for those who doesn't play to rank in events or Compe, so adding CUE! to your daily tasks list
				doesn't hurt. As with my first review, I recommend to try it out, you will appreciate it.
			</blockquote>
			<p>
				<a href="https://blog.nanao.moe/game-reviews/one-year-of-cue/">Read more</a>
			</p>
			<h3>Original Release Date Review</h3>
			<blockquote>
				Despite the similarities and the amount of grinding, CUE! manages to stand out for me. I
				recommend to try it sometimes, and get to the point where you can change casts in the anime.
				You will appreciate it.
			</blockquote>
			<p><a href="https://blog.nanao.moe/game-reviews/cue/">Read more</a></p>
		</PostMain>
	</Post>
</Container>
