<script>
	import { PageHeader, Container, Post, PostMain, PageHeaderContents } from '@damillora/plachta';
</script>

<svelte:head>
	<title>Damillora: Altessimo</title>
</svelte:head>

<Container>
	<Post>
		<PageHeader>
			<PageHeaderContents>
				<h1>Altessimo</h1>
				<p>
					<a href="https://altessimo.nanao.moe">live</a>
					&bull;
					<a href="https://github.com/Damillora/Altessimo">source code</a>
				</p>
			</PageHeaderContents>
		</PageHeader>
		<PostMain comments={false}>
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
				<img src="/images/projects/altessimo/1.jpg" alt="Altessimo" />
				<img src="/images/projects/altessimo/2.jpg" alt="Altessimo" />
				<img src="/images/projects/altessimo/3.jpg" alt="Altessimo" />
				<img src="/images/projects/altessimo/4.jpg" alt="Altessimo" />
			</div>
		</PostMain>
	</Post>
</Container>
