<script>
    import PageHeader from "components/PageHeader.svelte";
    import GalleryImage from "components/GalleryImage.svelte";
</script>

<svelte:head>
    <title>Damillora: nanao.moe (legacy)</title>
</svelte:head>

<div class="page">
    <PageHeader>
        <h1 class="page-header__heading">nanao.moe (legacy)</h1>
        <p class="page-header__text">
            <a href="https://nanao.moe">former live</a>
            &bull;
            <a href="https://github.com/Damillora/miracle">source code</a>
        </p>
    </PageHeader>
    <main class="container main">
        <h2>Description</h2>
        <p>
            A domain carves a person's place in the Internet. This is the
            codebase that formerly serves nanao.moe. It is named miracle, which
            is named after a Madeon song (Good Faith is great, btw).
        </p>
        <p>
            Originally, it is styled in pure CSS. However, it later used
            Tailwind.
        </p>
        <h2>Technologies</h2>
        <ul>
            <li>Vue.js</li>
            <li>Nuxt.js</li>
            <li>Tailwind CSS</li>
        </ul>
        <h2>Screenshots</h2>
        <div class="gallery">
            <GalleryImage src="/images/projects/miracle/1.png" />
            <GalleryImage src="/images/projects/miracle/2.png" />
        </div>
    </main>
</div>
