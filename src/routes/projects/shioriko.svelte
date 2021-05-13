<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import GalleryImage from '$lib/components/GalleryImage.svelte';
</script>

<svelte:head>
	<title>Damillora: nanao.moe</title>
</svelte:head>

<div class="page">
	<PageHeader>
		<h1 class="page-header__heading">Shioriko</h1>
		<p class="page-header__text">
			<a class="post-header__social" href="https://github.com/Damillora/Shioriko">source code</a>
		</p>
	</PageHeader>
	<main class="container main">
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
			<GalleryImage src="/images/projects/shioriko/1.png" />
		</div>
	</main>
</div>
