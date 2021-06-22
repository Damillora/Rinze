<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import GalleryImage from '$lib/components/GalleryImage.svelte';
</script>

<svelte:head>
	<title>Damillora: nanao.moe</title>
</svelte:head>

<div class="page">
	<PageHeader>
		<h1 class="page-header__heading">nanao.moe</h1>
		<p class="page-header__text">
			<a class="post-header__social" href="https://nanao.moe">live</a>
			&bull;
			<a class="post-header__social" href="https://github.com/Damillora/rinze">source code</a>
		</p>
	</PageHeader>
	<main class="container main">
		<h2>Description</h2>
		<p>
			A domain carves a person's place in the Internet. nanao.moe now serves as my primary web page.
			The website contains information about my projects and interests.
		</p>
		<p>
			The new codebase uses the same design as previous. However, it adopts new technologies and
			rewrites the stylesheet in SASS.
		</p>
		<h2>Technologies</h2>
		<ul>
			<li>Svelte</li>
			<li>SvelteKit</li>
			<li>SASS</li>
		</ul>
		<h2>Screenshots</h2>
		<div class="gallery">
			<GalleryImage src="/images/projects/rinze/1.png" alt="Rinze" />
			<GalleryImage src="/images/projects/rinze/2.png" alt="Rinze" />
		</div>
	</main>
</div>
