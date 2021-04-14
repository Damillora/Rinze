<script>
    import { Howl } from "howler";
    function yurikoSound() {
        var sound = new Howl({
            src: "/yuriko.ogg",
            volume: 0.3
        });
        sound.play();
    }
</script>

<div class="floating-yuriko hvr-float" on:click={yurikoSound}>
    <img src="/yuriko-smol.png" alt="Yuriko" />
</div>
