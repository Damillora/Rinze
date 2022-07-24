<script>
	import Card from '@damillora/plachta/components/Card/Card.svelte';
	import CardContent from '@damillora/plachta/components/Card/CardContent.svelte';
	import CardTitle from '@damillora/plachta/components/Card/CardTitle.svelte';
	import CardDescription from '@damillora/plachta/components/Card/CardDescription.svelte';
	export let title, link, description;
</script>

<Card>
	<CardContent>
		<CardTitle>
			<a href={link}>
				{title}
			</a>
		</CardTitle>
		<CardDescription>
			{description}
		</CardDescription>
	</CardContent>
</Card>
