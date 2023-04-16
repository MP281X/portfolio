<script lang="ts">
	import animateOnScroll from '$lib/animateOnScroll';
	animateOnScroll();

	let selectedCard = 0;

	const imgGroups = [
		['frontend', ['svelte', 'typescript', 'windicss', 'css', 'html5', 'flutter']],
		['backend', ['redis', 'postgresql', 'nodejs', 'mongodb', 'golang', 'dart']],
		['devops', ['argocd', 'longhorn', 'kubernetes', 'traefik', 'github-actions', 'docker']]
	];
</script>

<!-- tecnology i use -->
<section id="section-2" class="flex h-screen flex-col bg-accent text-white">
	<!-- buttons -->
	<div class="flex flex-wrap items-center justify-center gap-10 p-10">
		<button data-visible="false" on:click={() => (selectedCard = 0)}>Frontend</button>
		<button data-visible="false" on:click={() => (selectedCard = 1)}>Backend</button>
		<button data-visible="false" on:click={() => (selectedCard = 2)}>Devops</button>
	</div>

	<!-- grid -->
	<div class="h-full overflow-x-hidden">
		<div
			class="flex h-full w-[300vw] transition-all duration-300 ease-linear"
			style="transform: translateX(calc((100% / 3) * {selectedCard} * -1))">
			{#each imgGroups as imgGroup}
				<div
					class="grid w-screen grid-cols-2 grid-rows-3 gap-5 p-5 sm:grid-cols-3 sm:grid-rows-2 sm:gap-10 sm:p-10">
					{#each imgGroup[1] as img, i}
						<img
							data-visible="false"
							src="/img/{imgGroup[0]}/{img}.svg"
							alt={img}
							style="animation-delay: {i < 3 ? 0 : 200}ms;" />
					{/each}
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="postcss">
	img {
		@apply h-full object-contain p-7;
		aspect-ratio: 1;
		justify-self: center;
		align-items: center;

		opacity: 0;
	}

	button {
		@apply border-2 px-3 py-3 text-xl font-bold sm:px-5 sm:text-2xl;

		transition-property: box-shadow background;
		transition-duration: 0.4s;
		transition-timing-function: ease;

		opacity: 0;
	}

	button:hover {
		@apply border-2 border-accent bg-white text-accent;
		box-shadow: 5px 5px white;
	}
</style>
