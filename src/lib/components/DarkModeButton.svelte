<script>
    let icon = "brightness_low";
    let text = "Dark Mode";

    function toggleMode() {
        if(window.document.body.getAttribute("data-theme") != "dark") {
            window.document.body.setAttribute("data-theme","dark");
            icon = "brightness_high";
            text = "Light Mode"
        } else {
            window.document.body.setAttribute("data-theme","light");
            icon = "brightness_low";
            text = "Dark Mode"
        }
    }
</script>

<div class="menu__item menu--dark-mode" on:click={toggleMode}>
    <i class="menu__icon material-icons md-24">{icon}</i>
    <p class="menu__text">{text}</p>
</div>
