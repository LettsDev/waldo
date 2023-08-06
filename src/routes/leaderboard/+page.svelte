<script lang="ts">
	import Scoreboard from '$lib/components/scoreboard.svelte';
	import type { SceneType } from '../../types';
	import type { PageData } from './$types';

	//load in leaderboard scores from db
	export let data: PageData;
	const scores = data.scores;
	const scenes: SceneType[] = ['beach', 'hollywood', 'space', 'track'];
</script>

<main class="flex flex-col items-center gap-3 px-4 py-2">
	{#each scenes as scene}
		{@const scenedata = scores.filter((score) => score.scene === scene)}
		<Scoreboard {scene} scores={scenedata} />
	{/each}
</main>
