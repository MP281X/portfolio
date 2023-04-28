<!-- hero (display a stacked grid) -->
<section id="hero" class="relative grid h-[100svh] place-items-center pt-20 [grid-template-areas:stack] [&>*]:col-[1/-1] [&>*]:row-[1/-1]">
	<!-- animated text at the edge of the screen -->
	<h1 data-animation="text" class="absolute left-0 top-0 p-3 text-6xl font-bold sm:p-7 sm:text-7xl">{'<div>'}</h1>
	<h1 data-animation="text" class="absolute bottom-0 right-0 p-3 text-6xl font-bold sm:p-7 sm:text-7xl">{'</div>'}</h1>

	<!-- hero text -->
	<div class="z-10 p-5">
		<span class="text-5xl font-bold sm:text-7xl">Paludgnach <br /> Matteo </span>

		<br />

		<span data-visible="false" class="mt-5 block text-3xl font-semibold sm:text-4xl">
			Hi, I'm a FullStack developer <br /> from Italy
		</span>
	</div>
</section>
