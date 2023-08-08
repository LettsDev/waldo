<script lang="ts">
	import Scoreboard from '$lib/components/scoreboard.svelte';
	import type { SceneType } from '../../types';
	import type { PageData } from './$types';

	export let data: PageData;

	const scores = data.scores;
	const scenes: SceneType[] = ['beach', 'hollywood', 'space', 'track'];
	const tableTitles: string[] = ['at the beach', 'hollywood', 'in space', 'track and field'];
</script>

<main class="flex flex-col gap-3 px-3 py-2">
	{#each scenes as scene, index}
		{@const sceneData = scores.filter((score) => score.scene === scene)}
		<Scoreboard title={tableTitles[index]} scores={sceneData} />
	{/each}
</main>
