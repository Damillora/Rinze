<script>
    export let link, text, icon;
</script>

<div class="menu__item">
    <a class="menu__link" href={link}>
        <i class="menu__icon material-icons md-24">{icon}</i>
        <p class="menu__text">{text}</p>
    </a>
</div>
