<script>
	import { Howl } from 'howler';
	function yurikoSound() {
		var sound = new Howl({
			src: '/yuriko.ogg',
			volume: 0.3
		});
		sound.play();
	}
</script>

<div class="floating-yuriko hvr-float" on:click={yurikoSound}>
	<img src="/yuriko-smol.png" alt="Yuriko" />
</div>

<style lang="scss">
	.floating-yuriko {
		position: fixed;
		right: 1rem;
		bottom: 1rem;
		margin-bottom: 0px;
		cursor: pointer;
		&__image {
			height: 20vh;
		}
	}

	.hvr-float {
		display: inline-block;
		vertical-align: middle;
		-webkit-transform: perspective(1px) translateZ(0);
		transform: perspective(1px) translateZ(0);
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);
		-webkit-transition-duration: 0.3s;
		transition-duration: 0.3s;
		-webkit-transition-property: transform;
		transition-property: transform;
		-webkit-transition-timing-function: ease-out;
		transition-timing-function: ease-out;
	}
	.hvr-float:hover,
	.hvr-float:focus,
	.hvr-float:active {
		-webkit-transform: translateY(-8px);
		transform: translateY(-8px);
	}
</style>
