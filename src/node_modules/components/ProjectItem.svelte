<script>
    export let codename, name, description;
</script>

<div class="project-item">
    <div class="project-item__image">
        <img src={"/images/projects/" + codename + "/1.png"} alt={name} />
    </div>
    <div class="project-item__text">
        <div class="project-item__title">
            <h1><a href={"/projects/" + codename}>{name}</a></h1>
        </div>
        <div class="project-item__content">
            <p>{description}</p>
        </div>
    </div>
</div>
