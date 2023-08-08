<script>
	import { PageHeader, Container, Post, PostMain } from '@damillora/plachta';
</script>

<svelte:head>
	<title>Damillora: Damillora's Virtual Memoir</title>
</svelte:head>

<Container>
	<Post>
		<PageHeader>
			<h1>Damillora's Virtual Memoir</h1>
			<p>
				<a href="https://blog.nanao.moe">live</a>
				&bull;
				<a href="https://git.nanao.moe/Damillora/Shallie">source code</a>
			</p>
		</PageHeader>
		<PostMain comments={false}>
			<h2>Description</h2>
			<p>
				Damillora's Virtual Memoir is my hobby-related blog, writing about games and idols. As part
				of a design system reorganization, a new blog frontend written in SvelteKit.
			</p>
			<p>
				The backend runs on Ghost, a publication-focused CMS, while the frontend uses SvelteKit and
				SASS based on Mare Serenitatis design language.
			</p>
			<h2>Technologies</h2>
			<ul>
				<li>Ghost</li>
				<li>Svelte</li>
				<li>SvelteKit</li>
				<li>SASS</li>
			</ul>
			<h2>Screenshots</h2>
			<div class="gallery">
				<img src="/images/projects/shallie/1.jpg" alt="Yuika" />
			</div>
		</PostMain>
	</Post>
</Container>
