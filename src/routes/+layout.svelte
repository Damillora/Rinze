<script>
	import {
		Base,
		Header,
		Hero,
		NavMenu,
		NavDarkMode,
		Footer,
		NavigationLoading
	} from '@damillora/plachta';
	import FloatingYuriko from '$lib/components/FloatingYuriko.svelte';
	import { isYurikoBirthday } from '$lib/yuriko-birthday.js';
</script>

<Base>
	<Header>
		<svelte:fragment slot="title">
			<a href="/"> <strong>Damillora</strong></a>
		</svelte:fragment>
		<svelte:fragment slot="nav">
			<NavMenu label="About" url="/about" />
			<NavMenu label="Projects" url="/projects" />
			<NavMenu label="Game Profile" url="/games" />
			<NavMenu label="Links" url="/links" />
			<NavMenu label="Contact" url="/contact" />
			<NavMenu label="Blog" url="/blog" />
			<NavDarkMode />
		</svelte:fragment>
	</Header>

	<Hero background="/images/bg/283-yuika/bg-xl.jpg" />

	<slot />

	<Footer>
		<p>Copyright (c) 2023 Damillora</p>
	</Footer>
</Base>

{#if isYurikoBirthday()}
	<FloatingYuriko />
{/if}

<style lang="scss" global>
</style>
