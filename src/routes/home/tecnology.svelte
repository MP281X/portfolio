<script lang="ts">
	import { onMount } from 'svelte';
</script>

<!-- tecnology i use -->
<div id="tecnology" class="flex h-screen flex-col bg-black text-white">
	<div id="buttons" class="flex items-center justify-center gap-10 p-10">
		<button>Frontend</button>
		<button>Devops</button>
		<button>Backend</button>
	</div>
</div>

<style lang="postcss">
	#buttons > button {
		@apply border-2 px-5 py-3 text-2xl font-bold;
		transition-property: box-shadow background;
		transition-duration: 0.4s;
		transition-timing-function: ease;
	}

	/* button:nth-child(2) {
		transition-delay: 200ms;
	}

	button:nth-child(3) {
		transition-delay: 400ms;
	} */

	#buttons > *:hover {
		@apply border-2 border-black bg-white text-black;
		box-shadow: 5px 5px white;
	}
</style>
