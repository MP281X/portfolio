<script lang="ts">
	export let title: string

	export let showDivider = true
</script>

<div class="flex w-full flex-col">
	<h2 class="mb-5 text-xl font-bold tracking-widest">{title.toUpperCase()}</h2>
	<div class="flex w-full flex-col gap-4">
		<slot />
	</div>
</div>

{#if showDivider}
	<div class="my-10 w-full border-b-[0.7px] border-gray-300"></div>
{/if}
