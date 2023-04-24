<script lang="ts">
	import type { PageData } from './$types';
	export let projects: PageData['project'];
</script>

<section id="project" class="grid h-[200vh] grid-cols-1 gap-5 p-5 lg:h-screen lg:grid-cols-2">
	{#each projects as project}
		<a href={project.url} class="flex flex-col items-center justify-around gap-3">
			<div class="text-4xl">{project.project}</div>

			<div>{project.decription}</div>

			<div class="flex flex-wrap items-center justify-around gap-5">
				{#each project.stack as stack}
					<img src="/img/{stack}.svg" alt={stack.split('/')[1]} />
				{/each}
			</div>
		</a>
	{/each}
</section>

<style lang="postcss">
	section > a {
		@apply flex flex-col border-2 border-accent p-5 text-center text-xl font-bold text-accent;

		transition-property: box-shadow background;
		transition-duration: 0.4s;
		transition-timing-function: ease;
	}

	section > a:hover {
		box-shadow: 7px 7px #10101a;
	}

	img {
		@apply w-10 object-scale-down lg:w-14;
		aspect-ratio: 1;
	}
</style>
