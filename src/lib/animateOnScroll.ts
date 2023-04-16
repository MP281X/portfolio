import { onMount } from 'svelte';

export default () =>
	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.setAttribute('data-visible', 'true');
				} else {
					entry.target.setAttribute('data-visible', 'false');
				}
			});
		});

		const hiddenElement = document.querySelectorAll('[data-visible="false"]');
		hiddenElement.forEach((el) => observer.observe(el));
	});
