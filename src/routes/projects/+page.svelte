<script>
	import Container from '@damillora/plachta/components/Container/Container.svelte';
	import ProjectItem from '$lib/components/ProjectItem.svelte';
	import Index from '@damillora/plachta/components/PageTypes/Index.svelte';
</script>

<svelte:head>
	<title>Project Portfolio</title>
</svelte:head>

<Container>
	<Index>
		<h1>Projects</h1>

		<p>This is a list of projects that I maintain and publicly available on my GitHub.</p>
		<h2>Active Projects</h2>
		<div class="card-list">
			<ProjectItem
				name="nanao.moe"
				codename="rinze"
				description="The home page for my online identity"
			/>
			<ProjectItem
				name="Damillora's Virtual Memoir"
				codename="shallie"
				description="My online blog"
			/>
			<ProjectItem
				name="Altessimo"
				codename="altessimo"
				description="Work-in-progress database of composers and lyricists of THE iDOLM@STER"
			/>
			<ProjectItem
				name="Shioriko"
				codename="shioriko"
				description="Booru-like imageboard software written in Go and Svelte"
			/>
		</div>
		<h2>Inactive Projects</h2>

		<div class="card-list">
			<ProjectItem
				name="nanao.moe (legacy)"
				codename="miracle"
				description="Former codebase of nanao.moe"
			/>
			<ProjectItem name="Yuika theme" codename="yuika" description="Previous theme for my blog" />
		</div>
	</Index>
</Container>
