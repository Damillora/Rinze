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
