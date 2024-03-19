<script>
	import { Card, CardContent, CardTitle, CardDescription } from '@damillora/plachta';

	export let title, location, date;
	export let link = "";
</script>

<Card>
	<div class="dj-item">
		<CardContent>
			<CardTitle>
				{#if link}
					<a href={link}>
						{title}
					</a>
				{:else}
					{title}
				{/if}
			</CardTitle>
		</CardContent>
		<div class="dj-item__info">
			<div class="dj-item__id dj-item__id--top">
				<span class="dj-item__icon material-icons">calendar_month</span>{date}
			</div>
			<div class="dj-item__id dj-item__id--bottom">
				<span class="dj-item__icon material-icons">pin_drop</span>{location}
			</div>
		</div>
	</div>
</Card>

<style lang="scss">
	@import '@damillora/plachta/dist/styles/global';

	.dj-item {
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
			@include transition;

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
