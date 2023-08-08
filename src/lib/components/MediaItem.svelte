<script>
	import { Card, CardContent, CardTitle, CardDescription } from '@damillora/plachta';

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
