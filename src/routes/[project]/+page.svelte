<script lang="ts">
	import Navbar from '$lib/navbar.svelte'

	export let data
</script>

<svelte:head>
	<title>{data.project}</title>
</svelte:head>

<Navbar />

<div class="flex min-h-[100dvh] w-full flex-col justify-center gap-10 px-10 pb-10 pt-20 sm:px-40">
	<h1 data-animation="text" class="text-center text-5xl font-bold uppercase sm:text-7xl">{data.project}</h1>

	<div class="flex flex-wrap items-center justify-around gap-5">
		{#each data.stack as stack}
			<img src="/img/{stack}.svg" class="aspect-square w-10 object-scale-down lg:w-14" alt={stack.split('/')[1]} />
		{/each}
	</div>

	<section class="space-y-2 text-xl text-accent">
		{#each data.paragraph as paragraph}
			<p>{paragraph.replaceAll('\n', ' ').replaceAll('  ', ' ')}</p>
		{/each}
	</section>
</div>
<section
	class="grid min-h-screen grid-cols-1 gap-10 bg-accent p-10 {data.url === 'dicantieri' || data.url === 'sagra' ? 'sm:grid-cols-2' : 'sm:p-20'}"
>
	{#each data.screenshot as imgUrl}
		<img src="/projects/{data.url}/{imgUrl}" alt={imgUrl.split('.')[0]} class="w-full object-contain" style="aspect-ratio: 16/9;" />
	{/each}
</section>
