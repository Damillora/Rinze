<script>
    import NavItem from "./NavItem.svelte";
    import NavSeparator from "./NavSeparator.svelte";
    import DarkModeButton from "$lib/components/DarkModeButton.svelte";
    import { isYurikoBirthday } from "$lib/yuriko-birthday.js";

    let menu_shown = false;
    let detached = false;
    let scrollY = 0;
    function handleScroll(e) {
        detached = scrollY > 64;
    }
</script>

<svelte:window on:scroll={handleScroll} bind:scrollY />

<div>
    <div class:site-header={true} class:enabled={menu_shown} class:detached>
        <div class:site-header__background={true} class:site-header__background--enabled={menu_shown} class:background-nanaomoe={true} class:background-nanaomoe--yuriko={isYurikoBirthday()} />
        <div class="site-header__inner">
            <header class="header">
                <div class="header__top">
                    <a
                        class="header__title"
                        href="/"
                    >
                        Damillora
                        </a>
                    <div
                        class="header__nav-button"
                        on:click={() => (menu_shown = !menu_shown)}
                    >
                        <span class="header__icon material-icons" alt="menu"
                            >menu</span
                        >
                        <p class="header__nav-button-text">Menu</p>
                    </div>
                </div>
                <div
                    class:menu={true}
                    class:enabled={menu_shown}
                >
                    <NavItem link="/about" icon="person" text="About" />
                    <NavItem link="/projects" icon="work" text="Projects" />
                    <NavItem
                        link="/games"
                        icon="videogame_asset"
                        text="Game Profile"
                    />
                    <NavItem link="/links" icon="share" text="Links" />
                    <NavItem link="/contact" icon="contacts" text="Contact" />
                    <NavItem
                        link="//blog.nanao.moe"
                        icon="rss_feed"
                        text="Blog"
                    />
                    <DarkModeButton />
                </div>
            </header>
        </div>
    </div>
</div>
