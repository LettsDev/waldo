<script lang="ts">
	import type { CharacterDataInterface } from '../../types';
	export let character: CharacterDataInterface;
</script>

<div
	class={character.isFound ? 'flex flex-col items-center opacity-30' : 'flex flex-col items-center'}
>
	<img src={character.smallPic} alt={`image of ${character.name}`} class="w-12" />
	<p>{character.name}</p>
</div>
