<script>
    import PageHeader from "components/PageHeader.svelte";
    import ProjectItem from "components/ProjectItem.svelte";
</script>

<svelte:head>
    <title>Project Portfolio</title>
</svelte:head>

<div class="page">
    <PageHeader>
        <h1 class="page-header__heading">Project Portfolio</h1>
    </PageHeader>
    <main class="container mx-auto main">
        <p>
            I build applications in my spare time, but currently only some are
            published / live right now
        </p>
        <div class="card-list">
            <ProjectItem
                name="nanao.moe"
                codename="rinze"
                description="The home page for my online identity"
            />
            <ProjectItem
                name="nanao.moe (legacy)"
                codename="miracle"
                description="Former codebase of nanao.moe"
            />
            <ProjectItem
                name="Damillora's Virtual Memoir"
                codename="yuika"
                description="The blog for my hobbies"
            />
            <ProjectItem
                name="Altessimo"
                codename="altessimo"
                description="Web database of Idolmaster composers"
            />
        </div>
    </main>
</div>
