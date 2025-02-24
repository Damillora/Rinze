<script>
	import { PageHeader, Container, Post, PostMain, PageHeaderContents } from '@damillora/plachta';
</script>

<svelte:head>
	<title>Damillora: nanao.moe</title>
</svelte:head>

<Container>
	<Post>
		<PageHeader>
			<PageHeaderContents>
				<h1>phoebe</h1>
				<p>
					<a href="https://github.com/Damillora/phoebe">source code</a>
				</p>
			</PageHeaderContents>
		</PageHeader>
		<PostMain comments={false}>
			<h2>Description</h2>
			<p>
				a booru-style image gallery and organizer. 
				Built with the Go language and Svelte framework, phoebe is designed for personal image gathering.
			</p>
			<p>Formerly shioriko.</p>
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
