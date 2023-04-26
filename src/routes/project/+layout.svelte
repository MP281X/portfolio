<script lang="ts">
	import Navbar from '$lib/navbar.svelte';

	export let data;
</script>

<Navbar />

<div class="flex h-[100dvh] w-full flex-col justify-center gap-14 p-10 pt-20 sm:p-20">
	<h1 data-animation="text" class="text-center text-4xl font-bold uppercase sm:text-7xl">{data.project}</h1>
	<div class="flex flex-wrap items-center justify-around gap-5">
		{#each data.stack as stack}
			<img src="/img/{stack}.svg" class="aspect-square w-14 object-scale-down lg:w-20" alt={stack.split('/')[1]} />
		{/each}
	</div>
</div>

<slot />
