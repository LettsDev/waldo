<script lang="ts">
	import type { CharacterDataInterface } from '../../types';
	export let character: CharacterDataInterface;
	export let showCharacters: boolean;
	let containerElement: HTMLDivElement;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class={`character-select absolute ${
		showCharacters ? 'visible' : 'invisible'
	} rounded-xl bg-white hover:cursor-pointer hover:bg-waldo`}
	bind:this={containerElement}
	on:click
>
	<img src={character.smallPic} alt={`picture of ${character.name}`} />
</div>
