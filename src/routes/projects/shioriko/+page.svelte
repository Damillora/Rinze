<script>
	import PageHeader from '@damillora/plachta/components/PageHeader/PageHeader.svelte';
	import Container from '@damillora/plachta/components/Container/Container.svelte';
	import Post from '@damillora/plachta/components/PageTypes/Post.svelte';
	import PostMain from '@damillora/plachta/components/Post/PostMain.svelte';
</script>

<svelte:head>
	<title>Damillora: nanao.moe</title>
</svelte:head>

<Container>
	<Post>
		<PageHeader>
			<h1>Shioriko</h1>
			<p>
				<a href="https://github.com/Damillora/Shioriko">source code</a>
			</p>
		</PageHeader>
		<PostMain comments={false}>
			<h2>Description</h2>
			<p>
				Shioriko is a booru-like image board software written in Go and Svelte. Features currently
				includes automatic tag resolution, searching by tag, infinite-scrolling post browsing, and
				similarity search based on perceptual hashing.
			</p>
			<h2>Technologies</h2>
			<ul>
				<li>Svelte</li>
				<li>Bulma</li>
				<li>Go</li>
			</ul>
			<h2>Screenshots</h2>
			<div class="gallery">
				<img src="/images/projects/shioriko/1.jpg" alt="Shioriko" />
			</div>
		</PostMain>
	</Post>
</Container>
