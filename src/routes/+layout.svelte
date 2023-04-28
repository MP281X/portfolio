<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import '../app.css';

	// disable smooth scroll and reset animation on page change
	beforeNavigate(() => (document.getElementsByTagName('html')[0].style.scrollBehavior = 'auto'));
	afterNavigate(() => {
		document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth';

		/* when a element with the data attribute "visible" is visible
		on the screen change the attribute to run the css animation */
		document.querySelectorAll('[data-visible="false"]').forEach((el) =>
			new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) entry.target.setAttribute('data-visible', 'true');
				});
			}).observe(el)
		);
	});
</script>

<slot />
