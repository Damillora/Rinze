<script lang="ts">
	import { Card, CardContent, CardTitle, CardDescription } from '@damillora/plachta';

	let { title, link, description } = $props();
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
