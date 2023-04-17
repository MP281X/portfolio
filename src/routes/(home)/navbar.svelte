<script lang="ts">
	import { onMount } from 'svelte';

	let hMenu = false;
	const openMenu = () => (hMenu = !hMenu);

	onMount(() => {
		const nav = document.getElementById('nav') as HTMLElement;
		let positionPre = window.pageYOffset;

		window.onscroll = () => {
			let positionCurrent = window.pageYOffset;
			if (positionPre > positionCurrent) nav.style.top = '0';
			else nav.style.top = '-100px';
			positionPre = positionCurrent;
		};
	});
</script>

<!-- navbar -->
<nav id="nav">
	<!-- logo -->
	<a href="/home" class="text-5xl font-bold">MP</a>

	<!-- links -->
	<div class="hidden space-x-5 text-2xl font-bold sm:block">
		<a href="#my_skills" class="btn-black">MY SKILLS</a>
		<a href="#section-3" class="btn-black">SECTION 3</a>
		<a href="#section-4" class="btn-black">SECTION 4</a>
	</div>

	<!-- hamburgher menu button -->
	<button class="icons text-5xl md:hidden" on:click={openMenu}>menu</button>
</nav>

<!-- hamburgher menu -->
{#if hMenu}
	<div id="hMenu" class="fixed top-0 z-20 flex h-full w-full flex-col items-center justify-center space-y-6 bg-accent">
		<!-- hamburgher menu button -->
		<button class="icons absolute right-7 top-5 text-5xl text-white" on:click={openMenu}> menu </button>

		<!-- links -->
		<a on:click={openMenu} href="#my_skills" class="btn-white w-64">TECNOLOGY</a>
		<a on:click={openMenu} href="#section-3" class="btn-white w-64">SECTION 3</a>
		<a on:click={openMenu} href="#section-4" class="btn-white w-64">SECTION 4</a>
	</div>
{/if}

<style lang="postcss">
	nav {
		@apply fixed top-0 z-[15] flex h-20 w-full items-center justify-between bg-white px-5;
		transition: top 0.3s ease;
	}
</style>
