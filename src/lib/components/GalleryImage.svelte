<script>
    export let src, alt;

    let shown;

    function open() {
        if(shown) {
            window.open(src, "_blank");
        }
    }
</script>

<div class="gallery__image">
    <img {src} {alt} on:click={() => (shown = !shown)} />
    <div
        class:gallery__popup={true}
        class:gallery__popup--hidden={!shown}
    >
        <img class="gallery__popup-image" {src} {alt} on:click={open} draggable="false" />
        <div
            class="gallery__exit"
            on:click={() => (shown = !shown)}
        >x</div>
    </div>
</div>
