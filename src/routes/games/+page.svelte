<script>
	import { Container, Index } from '@damillora/plachta';
	import GameListItem from '$lib/components/GameListItem.svelte';
</script>

<svelte:head>
	<title>Damillora: Game Profile</title>
</svelte:head>

<Container>
	<Index>
		<h1>Game Profile</h1>
		<p>This page lists various IDs from games that I play and/or review.</p>
		<h2>Game Consoles and Arcade Games</h2>
		<GameListItem
			name="Nintendo Switch"
			link="/games"
			playername="Damillora"
			gameid="SW-8522-2159-0226"
		/>
		<GameListItem
			name="maimai DX"
			link="https://maimai.sega.com/"
			playername="YUIKA283"
			gameid="6027059823123"
			version="International ver"
		/>
		<GameListItem
			name="SOUND VOLTEX EXCEED GEAR"
			link="https://p.eagate.573.jp/game/sdvx/vi/index.html"
			playername="YUIKA283"
			gameid="SV-6457-6694"
		/>
		<h2>Main Mobile Games</h2>
		<GameListItem
			name="Arknights"
			link="http://arknights.global"
			playername="Damillora"
			gameid="Damillora#0835"
			reviewlink="https://blog.nanao.moe/game-reviews/arknights/"
			version="Global server"
		/>
		<GameListItem
			name="Azur Lane"
			link="https://azurlane.yo-star.com"
			playername="Damillora"
			gameid="204960914"
			version="Global server"
		/>
		<GameListItem
			name="Honkai Star Rail"
			link="https://hsr.hoyoverse.com"
			playername="Damillora"
			gameid="801618657"
			version="Asia server"
		/>
		<GameListItem
			name="IDOLY PRIDE"
			link="https://idolypride.jp/game/"
			playername="Damillora"
			gameid="9Y34R3VH"
			reviewlink="https://blog.nanao.moe/game-reviews/idoly-pride"
			version="Japanese server"
		/>
		<GameListItem
			name="Neural Cloud"
			link="https://42lab-us.sunborngame.com"
			playername="Damillora"
			gameid="52799"
			version="Global server"
		/>
		<h2>Currently Reviewing</h2>
		<GameListItem 
			name="Atelier Resleriana"
			link="http://www.gamecity.ne.jp/atelier/resleriana/"
			playername="Damillora"
			gameid="232492238926"
		/>
		<h2>Reviewed Mobile Games</h2>
		<GameListItem
			name="Alice Fiction"
			link="https://alice-fiction.com/en/"
			playername="Damillora"
			gameid="49e3dyqh9f80"
			reviewlink="https://blog.nanao.moe/game-reviews/alice-fiction/"
		/>
		<GameListItem
			name="ARGONAVIS from BanG Dream! AAside"
			link="https://aaside.bushimo.jp"
			playername="Damilora"
			gameid="3BUWJibt"
			reviewlink="https://blog.nanao.moe/game-reviews/argonavis-from-bang-dream-aaside/"
		/>
		<GameListItem
			name="Blue Archive"
			link="https://bluearchive.jp/"
			playername="Damillora"
			gameid="6296686"
			reviewlink="https://blog.nanao.moe/game-reviews/blue-archive/"
			version="Japanese server"
		/>
		<GameListItem
			name="Counter:Side"
			link="https://counterside.zlongame.com/"
			playername="Damillora"
			gameid="#394941"
			reviewlink="https://blog.nanao.moe/game-reviews/counter-side/"
			version="SEA server"
		/>
		<GameListItem
			name="CUE!"
			link="https://www.cue-liber.jp/"
			playername="Damillora"
			gameid="37132287893"
			reviewlink="https://blog.nanao.moe/game-reviews/cue/"
		/>
		<GameListItem
			name="Project SEKAI COLORFUL STAGE"
			link="https://pjsekai.sega.jp/"
			playername="Damillora"
			gameid="5121608293470214"
			reviewlink="https://blog.nanao.moe/game-reviews/project-sekai-colorful-stage/"
			version="Japanese server"
		/>
		<GameListItem
			name="Snowbreak: Containment Zone"
			link="https://snowbreak.amazingseasun.com/"
			playername="Damillora"
			gameid="11274762"
			reviewlink="https://blog.nanao.moe/game-reviews/snowbreak-containment-zone/"
		/>
		<GameListItem
			name="THE iDOLM@STER POPLINKS"
			link="https://poplinks.idolmaster-official.jp/"
			playername="Damillora"
			gameid="EQCU3N7K6T44J"
			reviewlink="https://blog.nanao.moe/game-reviews/the-idolmaster-poplinks/"
		/>
		<GameListItem
			name="欅坂46・日向坂46 UNI'S ON AIR"
			link="https://keyahina-unisonair.com/"
			playername="Damillora"
			gameid="y2medy4d"
			reviewlink="https://blog.nanao.moe/game-reviews/keyakizaka46-hinatazaka46-unis-on-air/"
		/>
		<!--
		<GameListItem
		  name=""
		  link=""
		  playername=""
		  gameid=""
		  />
		-->
	</Index>
</Container>
