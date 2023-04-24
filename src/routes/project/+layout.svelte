<script lang="ts">
	import Navbar from '$lib/navbar.svelte';

	export let data;
</script>

<Navbar />

<div class="min-h-[100svh] p-10 pt-20 sm:p-20">
	<div class="pt-10 text-center text-5xl font-bold">{data.project}</div>
	<div class="py-10 text-center text-3xl font-semibold">{data.decription}</div>
	<slot />
</div>
