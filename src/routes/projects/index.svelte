<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ProjectItem from '$lib/components/ProjectItem.svelte';
</script>

<svelte:head>
	<title>Project Portfolio</title>
</svelte:head>

<div class="page">
	<PageHeader>
		<h1 class="page-header__heading">Project Portfolio</h1>
	</PageHeader>
	<main class="container mx-auto main">
		<p>This is a list of projects that I maintain and publicly available on my GitHub.</p>
		<h2>Active Projects</h2>
		<div class="card-list">
			<ProjectItem
				name="nanao.moe"
				codename="rinze"
				description="The home page for my online identity"
			/>
			<ProjectItem
				name="nanao.moe (legacy)"
				codename="miracle"
				description="Former codebase of nanao.moe"
			/>
			<ProjectItem
				name="Damillora's Virtual Memoir"
				codename="yuika"
				description="The blog for my hobbies"
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
		</div>
	</main>
</div>
