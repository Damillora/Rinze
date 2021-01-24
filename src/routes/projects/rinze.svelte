<script>
    import PageHeader from 'components/PageHeader.svelte';
    import GalleryImage from 'components/GalleryImage.svelte';
</script>

<svelte:head>
    <title>Damillora: nanao.moe</title>
</svelte:head>

<div class="page">
    <PageHeader>
        <h1>nanao.moe</h1>
        <p>
            <a href="https://nanao.moe">live</a>
            &bull;
            <a href="https://github.com/Damillora/rinze">source code</a>
        </p>
    </PageHeader>
    <main class="container main">
        <h2>Description</h2>
        <p>
            A domain carves a person's place in the Internet. nanao.moe now
            serves as my primary web page. The website contains information
            about my projects and interests.
        </p>
        <p>
            The new codebase uses the same design as previous.
            However, it adopts new technologies and rewrites the stylesheet in SASS.
        </p>
        <h2>Technologies</h2>
        <ul>
            <li>Svelte</li>
            <li>Sapper</li>
            <li>SASS</li>
        </ul>
        <h2>Screenshots</h2>
        <div class="gallery">
            <GalleryImage src="/images/projects/rinze/1.png" />
            <GalleryImage src="/images/projects/miracle/2.png" />
        </div>
    </main>
</div>
