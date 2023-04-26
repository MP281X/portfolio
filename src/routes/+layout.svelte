<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	// import the scc with the tailwind config and the custom class
	import '../app.css';

	import { onMount } from 'svelte';

	onMount(() => {
		/* when a element with the data attribute "visible" is visible
		on the screen change the attribute to run the css animation */
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) entry.target.setAttribute('data-visible', 'true');
				// else entry.target.setAttribute('data-visible', 'false');
			});
		});

		document.querySelectorAll('[data-visible="false"]').forEach((el) => observer.observe(el));
	});

	// disable smooth scroll on page change
	beforeNavigate(() => (document.getElementsByTagName('html')[0].style.scrollBehavior = 'auto'));
	afterNavigate(() => (document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth'));
</script>

<!-- link the css with the icons, fonts and default config -->
<svelte:head>
	<link rel="stylesheet" href="/style/style.css" />
</svelte:head>

<slot />
