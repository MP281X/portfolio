<script lang="ts">
	import { onMount } from 'svelte';
	import type { sseData } from '$lib/sseHandler.server';

	import Hero from './hero.svelte';
	import Navbar from './navbar.svelte';
	import Skills from './skills.svelte';

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

	import type { PageData } from './$types';
	export let data: PageData;
</script>

<Navbar />

<Hero />

<Skills skills={data.skills} />
