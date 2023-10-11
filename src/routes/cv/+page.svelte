<script lang="ts">
	import Section from '$lib/section.svelte';

	export let data;
</script>

<main class="flex aspect-[210/297] w-full flex-col p-5 font-[Montserrat] text-sm">
	<div class="mb-3 text-5xl font-bold">PALUDGNACH MATTEO</div>
	<div class="text-2xl tracking-wider">Full-Stack Software developer</div>

	<div class="my-7 w-full border-b-[0.7px] border-gray-300" />

	<div class="flex w-full flex-row">
		<section class="flex w-[35%] flex-col">
			<Section title="skills">
				{#each data.skills as { type, languages }}
					<div class="flex flex-col">
						<div class="font-bold">{type.toUpperCase()}</div>
						<div>{languages.join(' - ')}</div>
					</div>
				{/each}
			</Section>

			<Section title="contacts">
				{#each data.contacts as { text, icon }}
					<div class="flex flex-row items-center justify-start gap-2">
						<span class="icons">{icon}</span>
						<div>{text}</div>
					</div>
				{/each}
			</Section>

			<Section title="languages" divider={false}>
				{#each data.languages as { language, level }}
					<div><span class="font-bold">{language.toUpperCase()}</span> - {level}</div>
				{/each}
			</Section>
		</section>

		<div class="mx-7 h-full border-l-[0.7px] border-gray-300" />

		<section class="flex w-[65%] flex-col">
			<Section title="summary">
				<p>
					For several years I have been deeply passionate about web, application and API development by utilizing technologies such as Typescript,
					SvelteKit, Flutter, Golang, Postgres, Redis and MongoDB.
				</p>

				<p>Additionally I have an interest in DevOps, employing technologies like Docker and Kubernetes, UI/UX design and project planning.</p>

				<p>
					I am punctual and reliable due to my initiative and organizational skills, and I endeavor to consistently bring fresh ideas to the table.
				</p>
			</Section>

			<Section title="work experience">
				{#each data.works as { company_name, type, period, location, job_position }}
					<div class="flex flex-col">
						<div class="row flex flex-row items-center justify-between">
							<div class="font-bold">{company_name.toUpperCase()} {type === 'stage' ? '(stage)' : ''}</div>
							<div>{period}</div>
						</div>

						<div class="row flex flex-row items-center justify-between">
							<div>{job_position}</div>
							<div>{location}</div>
						</div>
					</div>
				{/each}
			</Section>

			<Section title="education" divider={false}>
				{#each data.educations as { degree, school, period, vote, eqf }}
					<div class="flex flex-col">
						<div class="row flex flex-row items-center justify-between">
							<div class="font-bold">{school}</div>
							<div>{period}</div>
						</div>

						<div class="row flex flex-row items-center justify-between">
							<div>Final vote: {vote ? vote : '--'}</div>
							<div>EQF: {eqf}</div>
						</div>

						<div>{degree}</div>
					</div>
				{/each}
			</Section>
		</section>
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
</style>
