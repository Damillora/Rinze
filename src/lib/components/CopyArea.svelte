<script lang="ts">
    let { value = $bindable() } = $props();
    let copyarea = $state();

    let copy = () => {
        copyarea.select();
        copyarea.setSelectionRange(0, 99999); 
        document.execCommand("copy");
    };
</script>

<input type="text" class="copyarea" onclick={copy} bind:value={value} bind:this={copyarea} readonly/>

<style lang="scss">
    @use "@damillora/plachta/dist/styles/global" as *;

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