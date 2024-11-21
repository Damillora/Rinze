<script lang="ts">
	import type { Snippet } from 'svelte';
	import {
		Base,
		Header,
		Hero,
		Footer,
		NavigationLoading
	} from '@damillora/plachta';
	import FloatingYuriko from '$lib/components/FloatingYuriko.svelte';
	import { isYurikoBirthday } from '$lib/yuriko-birthday.js';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<Base>
	<SiteHeader />

	<Hero background="/images/bg/283-yuika/bg-xxl.jpg" />
	
	{@render children?.()}

	<Footer>
		<p>Copyright (c) 2024 Damillora</p>
	</Footer>
</Base>

{#if isYurikoBirthday()}
	<FloatingYuriko />
{/if}

<style lang="scss" global>
</style>
