<script lang="ts">
	import { Card, CardContent, CardDescription, CardTitle } from '@damillora/plachta';

	import CopyArea from '$lib/components/CopyArea.svelte';

	interface Props {
		name: any;
		link: any;
		gameid: any;
		playername: any;
		reviewlink?: any;
		version?: any;
	}

	let {
		name,
		link,
		gameid,
		playername,
		reviewlink = null,
		version = null
	}: Props = $props();
</script>

<Card>
	<div class="game-card">
		<CardContent>
			<CardTitle>
				<a href={link}>{name}</a>
				{#if version}
					<span class="game-card__version">
						{version}
					</span>
				{/if}
			</CardTitle>
			{#if reviewlink}
				<CardDescription>
					<a href={reviewlink}>View my review here</a>
				</CardDescription>
			{/if}
		</CardContent>
		<div class="game-card__info">
			<div class="game-card__id game-card__id--top">
				<span class="game-card__icon material-icons">person</span><CopyArea value={playername} />
			</div>
			<div class="game-card__id game-card__id--bottom">
				<span class="game-card__icon material-icons">code</span><CopyArea value={gameid} />
			</div>
		</div>
	</div>
</Card>

<style lang="scss">
	@import '@damillora/plachta/dist/styles/global';

	.game-card {
		width: 100%;
		display: grid;
		grid-template-rows: 1fr 150px;
		grid-template-columns: 1fr;

		@include screen(md) {
			grid-template-rows: 1fr;
			grid-template-columns: 6fr 300px;
		}

		&__info {
			border-radius: 0px 0px 20px 20px;
		}
		&__id {
			height: 50%;
			display: flex;
			flex-direction: row;
			align-items: center;
			min-height: 4rem;
			padding-left: 0.5rem;
			cursor: pointer;
			@include transition;

			&:hover {
				background-color: var(--highlight-bg-color);
			}

			&--top {
				border-radius: 0px;

				@include screen(md) {
					border-radius: 0px 20px 0px 0px;
				}
			}
			&--bottom {
				border-radius: 0px 0px 20px 20px;

				@include screen(md) {
					border-radius: 0px 0px 20px 0px;
				}
			}
		}

		&__version {
			font-size: $text-base;
			font-weight: 300;
			color: var(--primary-color);
		}
		&__icon {
			margin-right: 0.5rem;
		}
	}
</style>
