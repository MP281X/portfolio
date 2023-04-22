<script lang="ts">
	import SkillCard from '$lib/skillCard.svelte';

	import type { PageData } from './$types';

	export let skills: PageData['skills'];

	let selectedGroup = 0;
	// const imgGroups = [
	// 	['frontend', ['svelte', 'typescript', 'windicss', 'css', 'html5', 'flutter']],
	// 	['backend', ['redis', 'postgresql', 'nodejs', 'mongodb', 'golang', 'dart']],
	// 	['devops', ['argocd', 'longhorn', 'kubernetes', 'traefik', 'github-actions', 'docker']]
	// ];

	let selectedSkill: PageData['skills']['backend'][0];
	const setSkill = (x: PageData['skills']['backend'][0]) => (selectedSkill = x);
</script>

<!-- my skills -->
<section id="my_skills" class="flex h-screen flex-col bg-accent text-white">
	<!-- buttons -->
	<div class="flex flex-wrap items-center justify-center gap-10 p-10">
		<button data-visible="false" class="btn-white" on:click={() => (selectedGroup = 0)}> Frontend </button>
		<button data-visible="false" class="btn-white" on:click={() => (selectedGroup = 1)}> Backend </button>
		<button data-visible="false" class="btn-white" on:click={() => (selectedGroup = 2)}> Devops </button>
	</div>

	<!-- 3 flex with a width of 100vh that contains the 3 grid -->
	<div class="h-full overflow-x-hidden">
		<div class="flex h-full w-[300vw] transition-all duration-300 ease-linear" style="transform: translateX(calc((100% / 3) * {selectedGroup} * -1))">
			<!-- frontend -->
			<div class="grid w-screen grid-cols-2 grid-rows-3 gap-5 p-5 sm:grid-cols-3 sm:grid-rows-2 sm:gap-10 sm:p-10">
				{#each skills.frontend as skill, i}
					<button data-visible="false" class="img" on:click={() => setSkill(skill)}>
						<img src="/img/frontend/{skill.name}.svg" alt={skill.name} style="animation-delay: {i < 3 ? 0 : 200}ms;" />
					</button>
				{/each}
			</div>

			<!-- grid -->
			<div class="grid w-screen grid-cols-2 grid-rows-3 gap-5 p-5 sm:grid-cols-3 sm:grid-rows-2 sm:gap-10 sm:p-10">
				{#each skills.backend as skill, i}
					<button data-visible="false" class="img" on:click={() => setSkill(skill)}>
						<img src="/img/backend/{skill.name}.svg" alt={skill.name} style="animation-delay: {i < 3 ? 0 : 200}ms;" />
					</button>
				{/each}
			</div>

			<!-- grid -->
			<div class="grid w-screen grid-cols-2 grid-rows-3 gap-5 p-5 sm:grid-cols-3 sm:grid-rows-2 sm:gap-10 sm:p-10">
				{#each skills.devops as skill, i}
					<button data-visible="false" class="img" on:click={() => setSkill(skill)}>
						<img src="/img/devops/{skill.name}.svg" alt={skill.name} style="animation-delay: {i < 3 ? 0 : 200}ms;" />
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>

{#if selectedSkill !== undefined}
	<div>{selectedSkill.name}</div>
{/if}

<style lang="postcss">
	.img {
		@apply h-full p-7;
		aspect-ratio: 1;
		justify-self: center;
		align-items: center;

		display: flex;
		justify-content: center;
		align-items: center;

		border: solid 2px #10101a;
		transition-property: background box-shadow;
		transition-duration: 0.4s;
		transition-timing-function: ease;
	}

	.img:hover {
		background-color: #19192b;
		border: solid 2px #272740;
		box-shadow: 5px 5px #19192b;
	}

	.img > * {
		@apply h-full object-contain;
		justify-self: center;
	}
</style>
