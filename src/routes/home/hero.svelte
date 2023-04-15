<div id="hero" class="grid h-[calc(100dvh-4rem)] place-items-center">
	<div class="text-start text-9xl font-bold text-gray-100">Full Stack <br /> Developer</div>
	<div class="flex items-center justify-center gap-10 text-7xl font-bold">
		<div>
			Paludgnach <br /> Matteo <br />
			<span class="text-xl font-normal"> Hi, I'm an Italian full stack software developer </span>
		</div>
		<div>a</div>
	</div>
</div>

<style>
	#hero {
		grid-template-areas: stack;
	}

	#hero > * {
		grid-row: 1/-1;
		grid-column: 1/-1;
	}
</style>
