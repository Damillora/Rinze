<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import GalleryImage from '$lib/components/GalleryImage.svelte';
</script>

<svelte:head>
	<title>Damillora: Altessimo</title>
</svelte:head>

<div class="page">
	<PageHeader>
		<h1 class="page-header__heading">Altessimo</h1>
		<p class="page-header__text">
			<a class="post-header__social" href="https://altessimo.nanao.moe">live</a>
			&bull;
			<a class="post-header__social" href="https://github.com/Damillora/Altessimo">source code</a>
		</p>
	</PageHeader>
	<main class="container mx-auto main">
		<h2>Description</h2>
		<p>
			Altessimo is a web application I built to catalogue and put in context Idolmaster lyricists,
			composers, and arrangers.
		</p>
		<p>The database itself is definitely still a work-in-progress.</p>
		<h2>Technologies</h2>
		<ul>
			<li>Django</li>
			<li>Bootstrap</li>
		</ul>
		<h2>Screenshots</h2>
		<div class="gallery">
			<GalleryImage src="/images/projects/altessimo/1.png" alt="Altessimo" />
			<GalleryImage src="/images/projects/altessimo/2.png" alt="Altessimo" />
			<GalleryImage src="/images/projects/altessimo/3.png" alt="Altessimo" />
			<GalleryImage src="/images/projects/altessimo/4.png" alt="Altessimo" />
		</div>
	</main>
</div>
