<script>
	import Header from 'components/Header.svelte';
	import FloatingYuriko from 'components/FloatingYuriko.svelte';
	import { isYurikoBirthday } from 'lib/yuriko-birthday.js';
</script>

<style lang="scss" global>
	@import "~@damillora/shian/dist/app.css";
	@import "../sass/background";
</style>

<Header></Header>
<main>
	<slot></slot>
</main>
{#if isYurikoBirthday()}
<FloatingYuriko></FloatingYuriko>
{/if}