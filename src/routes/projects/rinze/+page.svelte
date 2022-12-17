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
			<h1>nanao.moe</h1>
			<p>
				<a href="https://nanao.moe">live</a>
				&bull;
				<a href="https://github.com/Damillora/rinze">source code</a>
			</p>
		</PageHeader>
		<PostMain comments={false}>
			<h2>Description</h2>
			<p>
				A domain carves a person's place in the Internet. nanao.moe now serves as my primary web page.
				The website contains information about my projects and interests.
			</p>
			<p>
				nanao.moe is now using the new Mare Serenitatis design language. However, the technology stack remains the same.
			</p>
			<h2>Technologies</h2>
			<ul>
				<li>Svelte</li>
				<li>SvelteKit</li>
				<li>SASS</li>
			</ul>
			<h2>Screenshots</h2>
			<div class="gallery">
				<img src="/images/projects/rinze/1.jpg" alt="Rinze" />
				<img src="/images/projects/rinze/2.jpg" alt="Rinze" />
			</div>
		</PostMain>
	</Post>
</Container>
