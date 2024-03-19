<script>

	import { Header, NavMenu, NavDarkMode} from "@damillora/plachta";

</script>

<Header>
    <svelte:fragment slot="title">
        <a href="/"> <strong>Damillora</strong></a>
    </svelte:fragment>
    <svelte:fragment slot="nav">
        <NavMenu label="About" url="/about" />
        <NavMenu label="Software" url="/projects" />
        <NavMenu label="DJ Damillora" url="/dj" />
        <NavMenu label="Game Profile" url="/games" />
        <NavMenu label="Contact" url="/contact" />
        <NavMenu label="Blog" url="/blog" />
        <NavDarkMode />
    </svelte:fragment>
</Header>