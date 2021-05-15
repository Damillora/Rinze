<script>
	import PageHeader from '$lib/components/PageHeader.svelte';

	let message = '';
	let errors = '';
	const submitMessage = async () => {
		errors = '';
		const endpoint = '/ask-form';
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				message: message
			})
		});
		const data = await response.json();
		if (response.status === 400) {
			errors = data.error;
		} else {
			errors = 'Success!';
		}
	};
</script>

<svelte:head>
	<title>Damillora</title>
</svelte:head>

<div class="page">
	<PageHeader>
		<h1 class="page-header__heading">Debut Stream!</h1>
	</PageHeader>
	<main class="container main">
		<p>This page contains information about my debut stream as a Virtual YouTuber.</p>
		<h2>When will it happen?</h2>
		<p>The debut stream is set to be on <strong>June 19th, 2021</strong>.</p>
		<h2>Watch my debut</h2>
		<p>
			My debut stream will be in this link: <a href="https://www.youtube.com/watch?v=PSTM2_tAywg"
				>[Debut Stream] Connection Established #1</a
			>
		</p>
		<h2>Send me a message for my debut!</h2>
		<p>
			All submissions are <strong>anonymous</strong>. Seriously,
			<a href="/projects/rinze">check it for yourself, it's open source</a>.
		</p>
		<p>The messages you send will be read during my debut stream.</p>
		<form on:submit|preventDefault={submitMessage}>
			<textarea class="input" bind:value={message} rows="5" />
			<p>{errors}</p>
			<button class="button" type="submit">Send</button>
		</form>
	</main>
</div>
