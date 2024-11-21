<script lang="ts">
	import { PostCard } from '@damillora/plachta';
	
	let { codename, name, description } = $props();
</script>

<PostCard
	title={name}
	url={`/projects/${codename}`}
	excerpt={description}
	feature_image={`/images/projects/${codename}/1.jpg`}
    readMore={false}
/>