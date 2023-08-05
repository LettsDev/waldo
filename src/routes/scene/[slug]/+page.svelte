<script lang="ts">
	import { writable } from 'svelte/store';
	import { onMount, onDestroy, setContext } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const characters = writable(data.scene.characters);
	setContext('characters', characters);
	import Canvas from '$lib/components/canvas.svelte';
	import SceneOverlay from '$lib/components/sceneOverlay.svelte';
	import SceneOverlayTimer from '$lib/components/sceneOverlayTimer.svelte';
	import SelectCharacter from '$lib/components/selectCharacter.svelte';
	import type { CharacterDataInterface } from '../../../types';
	let canvas: Canvas;
	let image: HTMLImageElement;
	let timerComponent: SceneOverlayTimer;
	let timer: NodeJS.Timer;
	let characterSelectPositions: { X: number; Y: number }[];
	let showCharacters = false;
	let characterSelectElements: HTMLDivElement[];
	let clickPosition = { X: 0, Y: 0 };
	onMount(() => {
		image = document.createElement('img');
		image.src = data.scene.image;
		image.onload = () => {
			canvas.setNaturalMeasurements(image.naturalWidth, image.naturalHeight);
			canvas.drawImage(image, 0, 0);

			//may or may not need to hide the image
			image.hidden = true;
		};
		//start the timer
		timer = timerComponent.start();
		//add window event listener to redraw the canvas and hide the character selection overlay on window resize
	});

	onDestroy(() => {
		clearInterval(timer);
	});

	function positionCharacters(width: number) {
		const charElems = document.getElementsByClassName('character-select');
		characterSelectElements = [...charElems] as HTMLDivElement[];
		characterSelectElements.forEach((elem, i) => {
			elem.style.setProperty('top', `${characterSelectPositions[i].Y}px`, 'important');
			elem.style.setProperty('left', `${characterSelectPositions[i].X}px`, 'important');
			const imgElement = elem.firstChild as HTMLImageElement;
			imgElement.style.setProperty('width', `${width * 0.8}px`);
		});
	}

	function onClickCanvas(ev: MouseEvent) {
		canvas.drawBox(ev.clientX, ev.clientY, image);
		const { canvasX, canvasY, selectionBoxWidth } = canvas.getSelectionBoxDetail(
			ev.clientX,
			ev.clientY
		);
		clickPosition = { X: canvasX, Y: canvasY };
		characterSelectPositions = canvas.calculateCharacterSelectPositions(ev.clientX, ev.clientY);
		positionCharacters(selectionBoxWidth);

		showCharacters = true;
	}

	function hasClickedCharacter(character:CharacterDataInterface){
		
	}


	function onClickCharacter(character: CharacterDataInterface) {}
</script>

<main class="relative flex flex-col">
	<Canvas bind:this={canvas} on:click={onClickCanvas} />
	<SceneOverlay characters={$characters} sceneData={data.scene}>
		<SceneOverlayTimer bind:this={timerComponent} />
	</SceneOverlay>
	{#each $characters as character}
		<SelectCharacter {character} {showCharacters} on:click={() => onClickCharacter(character)} />
	{/each}
</main>
