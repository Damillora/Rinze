<script>
    import { isYurikoBirthday } from "$lib/yuriko-birthday.js";
</script>

<div class="page-header">
    <div class:page-header__background={true} class:background-nanaomoe={true} class:background-nanaomoe--yuriko={isYurikoBirthday()} >
        <div class="page-header__overlay" />
    </div>
    <div class="page-header__contents">
        <div class="container mx-auto main">
            <slot />
        </div>
    </div>
</div>
