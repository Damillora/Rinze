<script>
    import CopyArea from "$lib/components/CopyArea.svelte";

    export let name, link, gameid, playername;
</script>

<div class="game-item">
    <div class="game-item__title">
        <p class="game-item__caption"><a href={link}>{name}</a></p>
    </div>
    <div class="game-item__content">
        <p class="game-item__text"><span class="game-item__icon material-icons">person</span><CopyArea value={playername} /></p>
        <p class="game-item__text"><span class="game-item__icon material-icons">code</span><CopyArea value={gameid} /></p>
    </div>
</div>
