<script>
	import PageHeader from "$lib/components/PageHeader.svelte";
	import GalleryImage from "$lib/components/GalleryImage.svelte";
</script>

<svelte:head>
	<title>Damillora: About</title>
</svelte:head>

<div class="page">
	<PageHeader>
		<h1 class="page-header__heading">About Damillora</h1>
	</PageHeader>
	<main class="container main">
		<p>Hello! My name is Damillora.</p>
		<p>
			I'm currently reconstructing my about page for new things, but I'm a
			web developer, rhythm game player and music enthusiast!
		</p>
		<h2>GPG public key</h2>
		<p>My public key is accessible <a href="/damillora.asc">here</a>.</p>
		<h2>Producer Meishi</h2>
		<div class="gallery">
			<GalleryImage src="/images/meishi/front.png" alt="Meishi front"/>
			<GalleryImage src="/images/meishi/back.png" alt="Meishi back"/>
		</div>
	</main>
</div>
