<script>
	import Header from 'components/Header.svelte';
</script>

<style lang="scss" global>
	@import '../style/app.scss';
</style>

<Header></Header>
<main>
	<slot></slot>
</main>