<!-- hero (display a stacked grid) -->
<section id="hero">
	<!-- animated text at the edge of the screen -->
	<h1 class="left-0 top-0">{'<div>'}</h1>
	<h1 class="bottom-0 right-0">{'</div>'}</h1>

	<!-- hero text -->
	<div class="z-10 p-5">
		<span class="text-5xl font-bold sm:text-7xl">Paludgnach <br /> Matteo </span>

		<br />

		<span data-visible="false" class="mt-5 block text-3xl font-semibold opacity-0 sm:text-4xl" style="animation-delay: 200ms;">
			Hi, I'm a FullStack developer <br /> from Italy
		</span>
	</div>
</section>

<style>
	/* grid  */
	section {
		grid-template-areas: stack;
		position: relative;
		height: 100svh;
		padding-top: 5rem;
		display: grid;
		place-items: center;
	}

	section > * {
		grid-row: 1 / -1;
		grid-column: 1 / -1;
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
