<script lang="ts">
	import type { CharacterDataInterface } from '../../types';
	export let character: CharacterDataInterface;
</script>

<div
	class={character.isFound
		? 'flex w-1/4 flex-col items-center opacity-30'
		: 'flex w-1/4 flex-col items-center'}
>
	<img src={character.smallPic} alt={`image of ${character.name}`} class="w-fit" />
	<p class="font-Rubik text-base sm:text-xs md:text-sm lg:text-base">{character.name}</p>
</div>
