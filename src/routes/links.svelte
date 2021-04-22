<script>
    import PageHeader from "components/PageHeader.svelte";
    import MediaItem from "components/MediaItem.svelte";
</script>

<svelte:head>
    <title>Damillora: Links</title>
</svelte:head>

<div class="page">
    <PageHeader>
        <h1 class="page-header__heading">Links</h1>
    </PageHeader>
    <main class="container mx-auto main">
        <p>
            Here, I post links that is of my interest, and might be for you too!
        </p>
        <div class="card-list">
            <MediaItem
                title="Damillora's Favorite Music Playlist"
                link="/favmusiclist"
            >
                    This playlist contains some of the music I listen to
                    frequently.
            </MediaItem>
        </div>
        <div class="card-list">
            <MediaItem
                title="Damillora's Carrd"
                link="https://damillora.carrd.co"
            >
                    Information that I think people expect out of a Carrd web page.
            </MediaItem>
        </div>
    </main>
</div>
