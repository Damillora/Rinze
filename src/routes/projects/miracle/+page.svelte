<script>
	import PageHeader from '@damillora/plachta/components/PageHeader/PageHeader.svelte';
	import Container from '@damillora/plachta/components/Container/Container.svelte';
	import Post from '@damillora/plachta/components/PageTypes/Post.svelte';
	import PostMain from '@damillora/plachta/components/Post/PostMain.svelte';
</script>

<svelte:head>
	<title>Damillora: nanao.moe (legacy)</title>
</svelte:head>

<Container>
	<Post>
		<PageHeader>
			<h1>nanao.moe (legacy)</h1>
			<p>
				<a href="https://github.com/Damillora/miracle">source code</a>
			</p>
		</PageHeader>
		<PostMain comments={false}>
			<h2>Description</h2>
			<p>
				A domain carves a person's place in the Internet. This is the codebase that formerly serves
				nanao.moe. It is named miracle, which is named after a Madeon song (Good Faith is great,
				btw).
			</p>
			<p>Originally, it is styled in pure CSS. However, it later used Tailwind.</p>
			<h2>Technologies</h2>
			<ul>
				<li>Vue.js</li>
				<li>Nuxt.js</li>
				<li>Tailwind CSS</li>
			</ul>
			<h2>Screenshots</h2>
			<div class="gallery">
				<img src="/images/projects/miracle/1.jpg" alt="Miracle" />
				<img src="/images/projects/miracle/2.jpg" alt="Miracle" />
			</div>
		</PostMain>
	</Post>
</Container>
