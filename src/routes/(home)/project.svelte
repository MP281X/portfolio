<script lang="ts">
	import type { PageData } from './$types';
	export let projects: PageData['project'];
</script>

<section id="project" class="grid h-[200vh] grid-cols-1 gap-5 p-5 lg:h-screen lg:grid-cols-2">
	{#each projects as project}
		<a
			href={project.url}
			class="flex flex-col items-center justify-around gap-3 border-2 border-accent p-5 text-xl font-bold text-accent transition-[box-shadow_background] duration-300 hover:shadow-[7px_7px_#10101a]">
			<div class="text-4xl">{project.project}</div>

			<div class="text-center">{project.decription}</div>

			<div class="flex flex-wrap items-center justify-around gap-5">
				{#each project.stack as stack}
					<img src="/img/{stack}.svg" class="aspect-square w-10 object-scale-down lg:w-14" alt={stack.split('/')[1]} />
				{/each}
			</div>
		</a>
	{/each}
</section>
