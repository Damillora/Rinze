<script>
    export let title, link;
</script>

<div class="media-item">
    <div class="media-item__title">
        <p class="media-item__caption"><a href={link}>{title}</a></p>
    </div>
    <div class="media-item__content">
        <p class="media-item__text">
            <slot />
        </p>
    </div>
</div>
