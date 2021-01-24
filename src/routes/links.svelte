<script>
    import PageHeader from "components/PageHeader.svelte";
    import MediaItem from "components/MediaItem.svelte";
</script>

<svelte:head>
    <title>Damillora: Links</title>
</svelte:head>

<div class="page">
    <PageHeader>
        <h1>Links</h1>
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
                <p>
                    This playlist contains some of the music I listen to
                    frequently.
                </p>
            </MediaItem>
        </div>
    </main>
</div>
