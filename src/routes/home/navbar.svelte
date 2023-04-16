<script lang="ts">
	let hMenu = false;

	const openMenu = () => (hMenu = !hMenu);
</script>

<nav class="absolute top-0 flex w-full items-center justify-between p-7">
	<a href="/home" class="text-5xl font-bold">MP</a>

	<div class="hidden space-x-5 text-2xl font-bold sm:block">
		<a href="#section-2">TECNOLOGY</a>
		<a href="#section-3">SECTION 3</a>
		<a href="#section-4">SECTION 4</a>
	</div>

	<button class="icons block sm:hidden" style="font-size: 45px;" on:click={openMenu}>menu</button>
</nav>

{#if hMenu}
	<div id="hMenu">
		<button
			class="icons absolute right-7 top-7 text-white"
			style="font-size: 45px;"
			on:click={openMenu}>
			menu</button>

		<a on:click={openMenu} href="#section-2">TECNOLOGY</a>
		<a on:click={openMenu} href="#section-3">SECTION 3</a>
		<a on:click={openMenu} href="#section-4">SECTION 4</a>
	</div>
{/if}

<style lang="postcss">
	nav > div > a {
		@apply border-2 border-white bg-accent px-5 py-3 text-2xl font-bold text-white;
		transition-property: box-shadow background;
		transition-duration: 0.4s;
		transition-timing-function: ease;
	}

	nav > div > a:hover {
		@apply border-accent bg-white text-accent;
		box-shadow: 5px 5px #10101a;
	}

	#hMenu {
		@apply absolute z-20 flex h-full w-full flex-col items-center justify-center space-y-6 bg-accent;
	}

	#hMenu > a {
		@apply w-64 border-2 px-3 py-3 text-center text-4xl font-bold text-white;

		transition-property: box-shadow background;
		transition-duration: 0.4s;
		transition-timing-function: ease;
	}

	#hMenu > a:hover {
		@apply border-2 border-accent bg-white text-accent;
		box-shadow: 5px 5px white;
	}
</style>
