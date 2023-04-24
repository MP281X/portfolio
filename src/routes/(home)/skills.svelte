<script lang="ts">
	import type { PageData } from './$types';
	export let skills: PageData['skills'];

	let selectedGroup = 0;
</script>

<!-- my skills -->
<section id="skills" class="flex h-screen flex-col bg-accent text-white">
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
					<div data-before={skill.name} data-visible="false" class="img">
						<img src="/img/frontend/{skill.name}.svg" alt={skill.name} />
						{#if skill.used}
							<span class="icons">check_circle</span>
						{/if}
					</div>
				{/each}
			</div>

			<!-- backend -->
			<div class="grid w-screen grid-cols-2 grid-rows-3 gap-5 p-5 sm:grid-cols-3 sm:grid-rows-2 sm:gap-10 sm:p-10">
				{#each skills.backend as skill, i}
					<div data-before={skill.name} data-visible="false" class="img">
						<img src="/img/backend/{skill.name}.svg" alt={skill.name} />
						{#if skill.used}
							<span class="icons">check_circle</span>
						{/if}
					</div>
				{/each}
			</div>

			<!-- devops -->
			<div class="grid w-screen grid-cols-2 grid-rows-3 gap-5 p-5 sm:grid-cols-3 sm:grid-rows-2 sm:gap-10 sm:p-10">
				{#each skills.devops as skill, i}
					<div data-before={skill.name} data-visible="false" class="img">
						<img src="/img/devops/{skill.name}.svg" alt={skill.name} />
						{#if skill.used}
							<span class="icons">check_circle</span>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.img {
		@apply relative h-full p-7;
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

	.img:hover::before {
		content: attr(data-before);
		@apply absolute -top-7 border-2 border-border bg-secondary px-3 py-2 text-xl font-bold;

		opacity: 0;
		animation-name: scrollAnimation;
		animation-duration: 0.5s;
		animation-timing-function: ease;
		animation-fill-mode: forwards;
	}

	.img:hover {
		background-color: #19192b;
		border: solid 2px #272740;
		box-shadow: 5px 5px #19192b;
	}

	.img > * {
		@apply h-full object-contain;
		justify-self: center;
		animation-delay: 200ms;
	}

	.img > span {
		@apply absolute right-1 top-0 text-2xl font-bold;
	}
</style>
