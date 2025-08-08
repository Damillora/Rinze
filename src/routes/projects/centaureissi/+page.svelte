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
				<h1>centaureissi</h1>
				<p>
					<a href="https://github.com/Damillora/centaureissi">source code</a>
				</p>
			</PageHeaderContents>
		</PageHeader>
		<PostMain comments={false}>
			<h2>Description</h2>
			<p>a service that stores emails and makes them searchable.</p>
			<h2>Technologies</h2>
			<ul>
				<li>Svelte</li>
				<li>Bulma</li>
				<li>Rust</li>
			</ul>
			<h2>Screenshots</h2>
			<div class="gallery">
				<img src="/images/projects/centaureissi/1.jpg" alt="Centaureissi" />
			</div>
		</PostMain>
	</Post>
</Container>
