<script lang="ts">
	import type { CharacterDataInterface, SceneData } from '../../types';
	export let characters: CharacterDataInterface[];
	export let sceneData: SceneData;
</script>

<div class="absolute left-2 top-2 rounded bg-white font-Rubik">
	<div class="flex items-end justify-between">
		<h2 class="pl-2 pt-2 text-xl font-medium capitalize">{sceneData.title}</h2>
		<!-- timer -->
		<slot />
	</div>
	<div class="flex items-end justify-evenly space-x-2 px-2 pb-1">
		{#each characters as character (character.name)}
			<div
				class={character.isFound
					? 'flex flex-col items-center opacity-80'
					: 'flex flex-col items-center'}
			>
				<img src={character.smallPic} alt={`image of ${character.name}`} class="w-12" />
				<p>{character.name}</p>
			</div>
		{/each}
	</div>
</div>
