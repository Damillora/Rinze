<script>
	import { PostCard } from '@damillora/plachta';
	
	export let codename, name, description;
</script>

<PostCard
	title={name}
	url={`/projects/${codename}`}
	excerpt={description}
	feature_image={`/images/projects/${codename}/1.jpg`}
    readMore={false}
/>