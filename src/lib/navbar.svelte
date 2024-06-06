<script lang="ts">
	import { onMount } from 'svelte'

	let isMenuOpen = false
	const openMenu = () => (isMenuOpen = !isMenuOpen)

	onMount(() => {
		const nav = document.getElementById('nav') as HTMLElement
		nav.style.top = '0'
		let positionPre = window.scrollY

		setTimeout(() => {
			window.onscroll = () => {
				const positionCurrent = window.scrollY
				if (positionPre > positionCurrent) nav.style.top = '0'
				else nav.style.top = '-100px'
				positionPre = positionCurrent
			}
		}, 100)
	})
</script>

<!-- navbar -->
<nav id="nav">
	<!-- logo -->
	<a href="/" class="text-5xl font-bold">MP</a>

	<!-- links -->
	<div class="hidden space-x-5 text-2xl font-bold sm:block">
		<a href="/#hero" class="btn-black">HOME</a>
		<a href="/#skills" class="btn-black">MY SKILLS</a>
		<a href="/#project" class="btn-black">MY PROJECTS</a>
	</div>

	<!-- hamburgher menu button -->
	<button on:click={openMenu} class="icons text-5xl md:hidden">menu</button>
</nav>

<!-- hamburgher menu -->
{#if isMenuOpen}
	<div id="hMenu" class="fixed top-0 z-20 flex h-full w-full flex-col items-center justify-center space-y-6 bg-accent">
		<!-- hamburgher menu button -->
		<button on:click={openMenu} class="icons absolute right-7 top-5 text-5xl text-white"> menu </button>

		<!-- links -->
		<a on:click={openMenu} href="/#hero" class="btn-black">HOME</a>
		<a on:click={openMenu} href="/#skills" class="btn-black">MY SKILLS</a>
		<a on:click={openMenu} href="/#project" class="btn-black">MY PROJECT</a>
	</div>
{/if}

<style lang="postcss">
	nav {
		@apply fixed top-0 z-[15] flex h-20 w-full items-center justify-between bg-white px-5;
		transition: top 0.3s ease;
	}
</style>
