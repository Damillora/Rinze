<script>
	import DjItem from '$lib/components/DjItem.svelte';

	import { Container, Hero, HeroContent, Index, Post } from '@damillora/plachta';
</script>

<svelte:head>
	<title>Damillora: About</title>
</svelte:head>

<Hero background="/images/feature-dj.jpg" contentSize="medium">
	<HeroContent>
		<h1 class="page-header__heading">DJ Damillora</h1>
		<p>
			My specialization is playing vocals from Japanese music on top of club music. Weaving popular
			songs and hidden gems together, I strive to make your event <strong>fun</strong>!
		</p>
	</HeroContent>
</Hero>
<Container>
	<Post>
		<h2>Want me for your event?</h2>
		<p>
			If you want me to perform at your event, <a href="/contact">contact me</a>!
		</p>
		<h2>Event List</h2>
		<DjItem
			title="OMEN Project Volume 2"
			date="10 March 2024"
			location="Online"
		/>
		<DjItem
			title="OTAKARA: Otaku Karaoke Party Night VOLUME 02!"
			date="8 February 2024"
			location="Redline Space"
		/>
		<DjItem
			title="Anikura Unison 2024"
			link="https://www.youtube.com/watch?v=7x8V3Jg5rEA"
			date="30 December 2023"
			location="Online"
		/>
		<DjItem
			title="Comic Frontier 17 Denonbu Indonesia booth"
			link="https://www.youtube.com/watch?v=XdxKERq0uzI"
			date="16 December 2023"
			location="ICE BSD"
		/>
		<DjItem
			title="GROUND:0"
			link="https://www.youtube.com/watch?v=U3Fv4NxHkGE"
			date="19 August 2023"
			location="Toribar Fatmawati"
		/>
		<DjItem
			title="DJ Music Night"
			link="https://www.youtube.com/watch?v=4l5-5xZSaK4"
			date="15 July 2023"
			location="Online"
		/>
		<DjItem
			title="Weebeats!: Dance after Work"
			link="https://www.youtube.com/watch?v=Ooq-j0X4rAQ"
			date="5 June 2023"
			location="Sun Katsura SCBD"
		/>
		<DjItem
			title="VTuber DJ Liveset Volume 2"
			link="https://www.youtube.com/watch?v=ztb-G-SdYXg"
			date="1 June 2023"
			location="Online"
		/>
		<DjItem
			title="Comic Frontier 16 Denonbu Indonesia booth"
			link="https://youtu.be/4JWRewQ8vs4"
			date="7 May 2023"
			location="ICE BSD"
		/>
	</Post>
</Container>
