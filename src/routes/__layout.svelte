<script>
	import Header from '$lib/components/Header.svelte';
	import FloatingYuriko from '$lib/components/FloatingYuriko.svelte';
	import { isYurikoBirthday } from '$lib/yuriko-birthday.js';
</script>

<Header />
<main>
	<slot />
</main>
{#if isYurikoBirthday()}
	<FloatingYuriko />
{/if}

<style lang="scss" global>
	@import '@damillora/shian/dist/app.css';
	@import '../sass/background';
</style>
