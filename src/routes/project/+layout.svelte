<script lang="ts">
	import Navbar from '$lib/navbar.svelte';

	export let data;
</script>

<Navbar />

<div class="flex h-[100dvh] w-full flex-col justify-center gap-14 p-10 pt-20 sm:p-20">
	<h1 class="text-center text-4xl font-bold uppercase sm:text-7xl">{data.project}</h1>
	<div class="flex flex-wrap items-center justify-around gap-5">
		{#each data.stack as stack}
			<img src="/img/{stack}.svg" alt={stack.split('/')[1]} />
		{/each}
	</div>
</div>

<slot />

<style lang="postcss">
	img {
		@apply w-14 object-scale-down lg:w-20;
		aspect-ratio: 1;
	}

	/* text gradient animation */
	h1 {
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
