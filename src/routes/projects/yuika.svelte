<script>
    import PageHeader from '$lib/components/PageHeader.svelte';
    import GalleryImage from '$lib/components/GalleryImage.svelte';
</script>

<svelte:head>
    <title>Damillora: Damillora's Virtual Memoir</title>
</svelte:head>

<div class="page">
    <PageHeader>
      <h1 class="page-header__heading">Damillora's Virtual Memoir</h1>
      <p class="page-header__text">
        <a href="https://blog.nanao.moe">live</a>
        &bull;
        <a href="https://github.com/Damillora/Yuika">source code</a>
      </p>
    </PageHeader>
    <main class="container mx-auto main">
      <h2>Description</h2>
      <p>
        Damillora's Virtual Memoir is my hobby-related blog, writing about games and idols.
      </p>
      <p>
        The blog runs on Ghost, a publication-focused CMS, while the theme uses Tailwind CSS for its CSS framework.
      </p>
      <h2>Technologies</h2>
      <ul>
        <li>Ghost</li>
        <li>Tailwind CSS</li>
        <li>jQuery</li>
      </ul>
      <h2>Screenshots</h2>
      <div class="gallery">
        <GalleryImage src="/images/projects/yuika/1.png" />
        <GalleryImage src="/images/projects/yuika/2.png" />
        <GalleryImage src="/images/projects/yuika/3.png" />
        <GalleryImage src="/images/projects/yuika/4.png" />
        <GalleryImage src="/images/projects/yuika/5.png" />
        <GalleryImage src="/images/projects/yuika/6.png" />
      </div>

    </main>
  </div>