<script lang="ts">
	import type { PageData } from './$types'
	export let skills: PageData['skills']

	let selectedGroup = 0
</script>

<!-- my skills -->
<section id="skills" class="flex h-screen flex-col bg-accent text-white">
	<!-- buttons -->
	<div class="flex flex-wrap items-center justify-center gap-10 p-10">
		<button on:click={() => (selectedGroup = 0)} class="btn-white" data-visible="false"> Frontend </button>
		<button on:click={() => (selectedGroup = 1)} class="btn-white" data-visible="false"> Backend </button>
		<button on:click={() => (selectedGroup = 2)} class="btn-white" data-visible="false"> Devops </button>
	</div>

	<div class="h-full overflow-x-hidden">
		<div class="flex h-full w-[300vw] transition-all duration-300 ease-linear" style="transform: translateX(calc((100% / 3) * {selectedGroup} * -1))">
			{#each Object.values(skills) as skillList}
				<div class="grid w-screen grid-cols-2 grid-rows-3 gap-5 p-5 sm:grid-cols-3 sm:grid-rows-2 sm:gap-10 sm:p-10">
					{#each skillList as skill}
						<div data-visible="false" data-before={skill.name}>
							<img
								alt={skill.name}
								class="w-[65%]"
								src="/img/{skill.category}/{skill.name}.svg"
							/>
							{#if skill.used}
								<span class="icons">check_circle</span>
							{/if}
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="postcss">
	div:has(> img) {
		@apply relative flex aspect-square h-full items-center justify-center justify-self-center border-2 border-accent p-7;
		transition-property: background box-shadow;
		transition-duration: 0.4s;
		transition-timing-function: ease;
	}

	div:has(> img):hover::before {
		content: attr(data-before);
		@apply absolute -top-5 border-2 border-border bg-secondary px-2 py-1 text-xl font-bold opacity-0;

		animation-name: scrollAnimation;
		animation-duration: 0.5s;
		animation-timing-function: ease;
		animation-fill-mode: forwards;
	}

	div:has(> img):hover {
		@apply border-2 border-border bg-secondary shadow-[5px_5px_#19192b];
	}

	div:has(> img) > * {
		@apply h-full justify-self-center object-contain;
		animation-delay: 200ms;
	}

	div:has(> img) > span {
		@apply absolute right-1 top-0 text-2xl font-bold;
	}
</style>
