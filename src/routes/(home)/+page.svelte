<script lang="ts">
	import { onMount } from 'svelte';
	import type { sseData } from '$lib/sseHandler.server';

	import Navbar from '$lib/navbar.svelte';
	import Hero from './hero.svelte';
	import Skills from './skills.svelte';
	import Project from './project.svelte';
	import Footer from './footer.svelte';

	onMount(() => {
		// connect to the sse server
		const eventSource = new EventSource('/sse');

		// listen for new message
		eventSource.addEventListener('message', (event) => {
			// return the message
			try {
				const data = JSON.parse(event.data) as sseData;
				console.log(data.message);
			} catch {} // eslint-disable-line no-empty
		});
	});

	export let data;
</script>

<Navbar />

<Hero />

<Skills skills={data.skills} />

<Project projects={data.project} />

<Footer />
