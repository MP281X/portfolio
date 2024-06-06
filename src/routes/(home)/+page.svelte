<script lang="ts">
	import Hero from './hero.svelte'
	import Skills from './skills.svelte'
	import Footer from './footer.svelte'
	import Project from './project.svelte'
	import Navbar from '$lib/navbar.svelte'

	export let data
</script>

<svelte:head>
	<title>MP281X</title>
</svelte:head>

<Navbar />

<Hero />

<Skills skills={data.skills} />

<Project projects={data.project} />

<Footer />
