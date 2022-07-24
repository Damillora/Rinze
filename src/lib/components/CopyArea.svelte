<script>
    export let value;
    let copyarea;

    let copy = () => {
        copyarea.select();
        copyarea.setSelectionRange(0, 99999); 
        document.execCommand("copy");
    };
</script>

<input type="text" class="copyarea" on:click={copy} bind:value={value} bind:this={copyarea} readonly/>

<style lang="scss">
    @import "@damillora/plachta/styles/global";

    .copyarea {
        background-color: var(--background-color);
        cursor: pointer;
        height: 100%;
        width: 100%;
        &:focus {
            outline: none;
        }
    }
</style>