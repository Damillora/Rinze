<script>
	import { PageHeader, Container, Post, PostMain, PageHeaderContents } from '@damillora/plachta';
</script>


<svelte:head>
	<title>Damillora: Yuika theme</title>
</svelte:head>

<Container>
	<Post>
		<PageHeader>
			<PageHeaderContents>
				<h1>Yuika theme</h1>
				<p>
					<a href="https://github.com/Damillora/Yuika">source code</a>
				</p>
			</PageHeaderContents>
		</PageHeader>
		<PostMain comments={false}>
			<h2>Description</h2>
			<p>
				Damillora's Virtual Memoir is my hobby-related blog, writing about games and idols. The blog
				uses the Yuika theme, which was designed solely for Damillora's Virtual Memoir.
			</p>
			<p>
				The blog runs on Ghost, a publication-focused CMS, while the theme uses Tailwind CSS for its
				CSS framework.
			</p>
			<h2>Technologies</h2>
			<ul>
				<li>Ghost</li>
				<li>Tailwind CSS</li>
				<li>jQuery</li>
			</ul>
			<h2>Screenshots</h2>
			<div class="gallery">
				<img src="/images/projects/yuika/1.jpg" alt="Yuika" />
				<img src="/images/projects/yuika/2.jpg" alt="Yuika" />
				<img src="/images/projects/yuika/3.jpg" alt="Yuika" />
				<img src="/images/projects/yuika/4.jpg" alt="Yuika" />
				<img src="/images/projects/yuika/5.jpg" alt="Yuika" />
				<img src="/images/projects/yuika/6.jpg" alt="Yuika" />
			</div>
		</PostMain>
	</Post>
</Container>
