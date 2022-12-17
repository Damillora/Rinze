<script>
	import { navigating } from '$app/stores';
	import Base from '@damillora/plachta/components/Base/Base.svelte';
	import Header from '@damillora/plachta/components/Header/Header.svelte';
	import Hero from '@damillora/plachta/components/Hero/Hero.svelte';
	import NavMenu from '@damillora/plachta/components/Nav/NavMenu.svelte';
	import NavDarkMode from '@damillora/plachta/components/Nav/NavDarkMode.svelte';
	import Footer from '@damillora/plachta/components/Footer/Footer.svelte';
	import NavigationLoading from '@damillora/plachta/components/NavigationLoading/NavigationLoading.svelte';
	import FloatingYuriko from '$lib/components/FloatingYuriko.svelte';
	import { isYurikoBirthday } from '$lib/yuriko-birthday.js';
	let loading = true;
	navigating.subscribe((x) => (loading = x != null));
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

<NavigationLoading {loading} />

<style lang="scss" global>
</style>
