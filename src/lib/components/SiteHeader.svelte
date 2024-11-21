<script>

	import { Header, NavMenu, NavDarkMode} from "@damillora/plachta";

</script>

<Header>
    {#snippet title()}
    
            <a href="/"> <strong>Damillora</strong></a>
        
    {/snippet}
    {#snippet nav()}
    
            <NavMenu label="About" url="/about" />
            <NavMenu label="Software" url="/projects" />
            <NavMenu label="DJ Damillora" url="/dj" />
            <NavMenu label="Game Profile" url="/games" />
            <NavMenu label="Contact" url="/contact" />
            <NavMenu label="Blog" url="/blog" />
            <NavDarkMode />
        
    {/snippet}
</Header>