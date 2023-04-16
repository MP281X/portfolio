<script lang="ts">
	let hMenu = false;
	const openMenu = () => (hMenu = !hMenu);
</script>

<!-- navbar -->
<nav class="flex h-20 w-full items-center justify-between px-7">
	<!-- logo -->
	<a href="/home" class="text-5xl font-bold">MP</a>

	<!-- links -->
	<div class="hidden space-x-5 text-2xl font-bold sm:block">
		<a href="#section-2" class="btn-black">TECNOLOGY</a>
		<a href="#section-3" class="btn-black">SECTION 3</a>
		<a href="#section-4" class="btn-black">SECTION 4</a>
	</div>

	<!-- hamburgher menu button -->
	<button class="icons block text-5xl sm:hidden" on:click={openMenu}>menu</button>
</nav>

<!-- hamburgher menu -->
{#if hMenu}
	<div id="hMenu" class="fixed top-0 z-20 flex h-full w-full flex-col items-center justify-center space-y-6 bg-accent">
		<!-- hamburgher menu button -->
		<button class="icons absolute right-7 top-5 text-5xl text-white" on:click={openMenu}> menu </button>

		<!-- links -->
		<a on:click={openMenu} href="#section-2" class="btn-white w-64">TECNOLOGY</a>
		<a on:click={openMenu} href="#section-3" class="btn-white w-64">SECTION 3</a>
		<a on:click={openMenu} href="#section-4" class="btn-white w-64">SECTION 4</a>
	</div>
{/if}
