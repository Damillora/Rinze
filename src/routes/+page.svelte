<script>
	import { Hero, HeroContent, HeroList, Container, Index } from '@damillora/plachta';
</script>

<svelte:head>
	<title>Damillora</title>
</svelte:head>

<HeroList>
	<Hero background="/images/bg/283-yuika/bg-xxl.jpg">
		<HeroContent>
			<h1>Programmer by day, DJ at night</h1>
			<p>
				Welcome to my personal website. I'm a programmer by day, and a DJ by night. 
				This site serves as my introduction, and lists my coding projects and game reviews as well.
			</p>
		</HeroContent>
	</Hero>
	<Hero background="/images/default-feature.jpg" halfWidth>
		<HeroContent>
			<h1><a href="/projects">Software Projects</a></h1>
			<p>
				I make various software, including this very website.
			</p>
		</HeroContent>
	</Hero>
	<Hero background="/images/feature-dj.jpg" halfWidth>
		<HeroContent>
			<h1><a href="/dj">DJ Damillora</a></h1>
			<p>
				I focus on playing Japanese music vocals on top of club music.
			</p>
		</HeroContent>
	</Hero>
</HeroList>