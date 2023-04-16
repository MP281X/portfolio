<script>
	import { onMount } from 'svelte';
	import Hero from './hero.svelte';
	import Tecnology from './tecnology.svelte';

	onMount(() => {
		window.scrollTo(0, 1);
	});
</script>

<div id="scrollSnap">
	<Hero />

	<Tecnology />
</div>

<style lang="postcss">
	#scrollSnap {
		/* add the scroll snap functionality */
		height: 100vh;
		scroll-snap-type: y proximity;
		overflow-x: scroll;

		/* scroll to ancor point */
		scroll-behavior: smooth;
		position: relative;
	}

	:global(section) {
		scroll-snap-align: end;
	}
</style>
