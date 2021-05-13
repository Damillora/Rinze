<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import GalleryImage from '$lib/components/GalleryImage.svelte';
</script>

<svelte:head>
	<title>Damillora: About</title>
</svelte:head>

<div class="page">
	<PageHeader>
		<h1 class="page-header__heading">About Damillora</h1>
	</PageHeader>
	<main class="container main">
		<p>
			Hello! My name is Damillora. I'm an indie Virtual YouTuber with a focus on technology, games,
			and music exploration!
		</p>
		<h2>Profile</h2>
		<ul>
			<li><strong>Name: </strong> Damillora</li>
			<li><strong>Birthday: </strong>February 29</li>
		</ul>
		<h2>Credits</h2>
		<p>
			I am thankful to several for bringing my Virtual YouTuber project to life, and I will list
			them here.
		</p>
		<h3>Illustrator: Mira Cassiela</h3>
		<p>*Insert description here*</p>
		<p>
			<a href="https://linktr.ee/miracassiela">Linktree</a>
		</p>
		<h3>Live2D Rigging: Siauw Adhie</h3>
		<p>*Insert description here*</p>
		<p>
			<a href="https://twitter.com/adhiesc123">Twitter</a>
			&bull;
			<a href="https://www.youtube.com/c/SiauwAdhie">YouTube</a>
		</p>
		<h2>Where you can find me</h2>
		<h3>Publishing media</h3>
		<p>I publish content mainly in those sites</p>
		<ul>
			<li>
				<p>YouTube:</p>
				<p><a href="/channel">Damillora</a></p>
			</li>
			<li>
				<p>Twitch:</p>
				<p><a href="https://www.twitch.tv/damillora">Damillora</a></p>
			</li>
			<li>
				<p>SoundCloud:</p>
				<p><a href="https://soundcloud.com/damillora">damillora</a></p>
			</li>
			<li>
				<p>GitHub:</p>
				<p><a href="https://github.com/Damillora">Damillora</a></p>
			</li>
		</ul>
		<h3>Alternative technologies</h3>
		<p>
			Mainstream platforms control what you can post, and you can lose access to data rightfully
			yours.
			<br />
			I maintain presence in several altenative platforms and technologies to ensure I have control of
			data I post, to contribute to a possible future, and as a backup when mainstream platforms go down.
			<br />
			If you have a presence in those platforms, I encourage you to use these instead, you will help
			the adoption of those technologies!
		</p>
		<ul>
			<li>
				<p>Fediverse:</p>
				<p><a href="https://fed.nanao.moe/@Damillora">Damillora@fed.nanao.moe</a></p>
			</li>
			<li>
				<p>PeerTube:</p>
				<p><a href="/fedichan">damillora@live.nanao.moe</a></p>
			</li>
			<li>
				<p>Funkwhale:</p>
				<p><a href="https://sounds.nanao.moe/@Damillora">@Damillora@live.nanao.moe</a></p>
			</li>
			<li>
				<p>Matrix</p>
				<p>@damillora:matrix.nanao.moe</p>
			</li>
			<li>
				<p>Gemini</p>
				<p><a href="gemini://gemini.nanao.moe">gemini.nanao.moe</a></p>
			</li>
		</ul>
		<h2>GPG public key</h2>
		<p>My public key is accessible <a href="/damillora.asc">here</a>.</p>
		<h2>Producer Meishi</h2>
		<div class="gallery">
			<GalleryImage src="/images/meishi/front-shianv2.png" alt="Meishi front" />
			<GalleryImage src="/images/meishi/back-shianv2.png" alt="Meishi back" />
		</div>
	</main>
</div>
