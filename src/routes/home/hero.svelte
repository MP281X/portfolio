<script>
	import Navbar from './navbar.svelte';

	import animateOnScroll from '$lib/animateOnScroll';
	animateOnScroll();
</script>

<!-- hero -->
<section id="section-1" class="grid h-screen place-items-center bg-white">
	<h1 class="left-0 top-16">{'<div>'}</h1>
	<h1 class="bottom-0 right-0">{'</div>'}</h1>

	<Navbar />

	<p class="z-10 p-5">
		<span class="text-5xl font-bold sm:text-7xl">Paludgnach <br /> Matteo </span>

		<br />

		<span data-visible="false" class="mt-5 block text-3xl font-normal opacity-0 sm:text-4xl">
			Hi, I'm a Full Stack developer <br /> from Italy
		</span>
	</p>
</section>

<style>
	section {
		grid-template-areas: stack;
	}

	section > * {
		grid-row: 1/-1;
		grid-column: 1/-1;
	}

	:is([data-visible='true']) {
		animation-delay: 200ms;
	}

	/* text gradient animation */
	h1 {
		@apply absolute p-7 text-7xl font-bold opacity-50;

		background: linear-gradient(-45deg, #6bc5f8, #cf59e6, #6bc5f8, #cf59e6);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		text-fill-color: transparent;
		background-size: 400% auto;

		animation: textAnimation 5s ease-in-out infinite alternate;
	}

	@keyframes textAnimation {
		0% {
			background-position: 0% 50%;
		}
		100% {
			background-position: 100% 50%;
		}
	}
</style>
