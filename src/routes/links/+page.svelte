<script>
	import { Hero, Container, Index } from '@damillora/plachta';
	import MediaItem from '$lib/components/MediaItem.svelte';
</script>

<svelte:head>
	<title>Damillora: Links</title>
</svelte:head>

<Container>
	<Index>
		<h1>Links</h1>

		<p>Here, I post links that is of my interest, and might be for you too!</p>
		<h2>Personal Links</h2>
		<div class="card-list">
			<MediaItem
				title="Damillora's Favorite Music Playlist"
				link="/favmusiclist"
				description="This playlist contains some of the music I listen to frequently."
			/>
		</div>
	</Index>
</Container>
