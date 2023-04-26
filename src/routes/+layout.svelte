<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	// import the scc with the tailwind config and the custom class
	import '../app.css';

	onMount(() => {
		/* when a element with the data attribute "visible" is visible
		on the screen change the attribute to run the css animation */
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) entry.target.setAttribute('data-visible', 'true');
			});
		});

		document.querySelectorAll('[data-visible="false"]').forEach((el) => observer.observe(el));

		// disable smooth scroll and reset animation on page change
		beforeNavigate(() => {
			document.getElementsByTagName('html')[0].style.scrollBehavior = 'auto';
			document.querySelectorAll('[data-visible="false"]').forEach((e) => e.setAttribute('data-visible', 'false'));
		});
		afterNavigate(() => (document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth'));
	});
</script>

<slot />
