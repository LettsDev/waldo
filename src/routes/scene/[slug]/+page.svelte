<script lang="ts">
	import { writable } from 'svelte/store';
	import { onMount, onDestroy, setContext } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	import { goto } from '$app/navigation';
	const characters = writable(data.scene.characters);
	setContext('characters', characters);
	import Canvas from '$lib/components/canvas.svelte';
	import SceneOverlay from '$lib/components/sceneOverlay.svelte';
	import SceneOverlayTimer from '$lib/components/sceneOverlayTimer.svelte';
	import SelectCharacter from '$lib/components/selectCharacter.svelte';
	import type { CharacterCoords, CharacterDataInterface } from '../../../types';
	import { getDocument, save } from '$lib/dbController';
	import OverlayCharacter from '$lib/components/overlayCharacter.svelte';
	import type { formatPostcssSourceMap } from 'vite';
	let startTime: number;
	let currentTime: number;
	$: currentTimeSeconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);
	$: currentTimeMinutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
	$: timeElapsed = currentTime - startTime;

	let canvas: Canvas;
	let image: HTMLImageElement;
	let timerComponent: SceneOverlayTimer;
	let timer: NodeJS.Timer;
	let characterSelectPositions: { X: number; Y: number }[];
	let showCharacters = false;
	let characterSelectElements: HTMLDivElement[];
	let clickPosition = { X: 0, Y: 0 };
	let dialog: HTMLDialogElement;

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
		const { mouseX, mouseY, selectionBoxWidth } = canvas.getSelectionBoxDetail(
			ev.clientX,
			ev.clientY
		);
		const { clientWidth, clientHeight } = canvas.getClientDimensions();
		clickPosition = { X: mouseX / clientWidth, Y: mouseY / clientHeight };
		characterSelectPositions = canvas.calculateCharacterSelectPositions(ev.clientX, ev.clientY);
		positionCharacters(selectionBoxWidth);
		showCharacters = true;
	}

	async function hasClickedCharacter(character: CharacterDataInterface) {
		const sceneData = await getDocument('scenes', data.scene.scene);
		if (sceneData) {
			const sceneObject = sceneData.data() as { characters: CharacterCoords[] };
			const characters = sceneObject.characters;
			const foundChar = characters.find((char) => char.name === character.name);

			if (foundChar) {
				if (
					clickPosition.Y >= foundChar.yTop &&
					clickPosition.Y <= foundChar.yBottom &&
					clickPosition.X <= foundChar.xRight &&
					clickPosition.X >= foundChar.xLeft
				) {
					return true;
				}
				return false;
			}
		}
	}

	async function onClickCharacter(character: CharacterDataInterface) {
		const outcome = await hasClickedCharacter(character);
		if (outcome) {
			//has clicked the correct character

			//update store
			const copy = $characters;
			const index = $characters.findIndex((char) => char.name === character.name);
			const chosen = $characters[index];
			chosen.isFound = true;
			copy.splice(index, 1, chosen);
			$characters = copy;
			//hide the  selection characters & selectionBox (by redrawing the canvas)
			showCharacters = false;
			canvas.drawImage(image, 0, 0);

			//game finished?
			if ($characters.findIndex((char) => char.isFound === false) === -1) {
				//there are no more characters left to be found
				clearInterval(timer);
				dialog.show();
			}
		}
	}

	async function onSubmit(ev: SubmitEvent) {
		ev.preventDefault();
		if (!!ev.currentTarget) {
			const formData = new FormData(ev.currentTarget as HTMLFormElement);
			const username = formData.get('username');
			if (typeof username === 'string') {
				//TODO make sure that the name is not naughty
				save('scores', {
					userName: username,
					timestamp: new Date(),
					durationInSeconds: timeElapsed,
					scene: data.scene.scene
				});
				dialog.close();
				//redirect to leader board
				goto('/leaderboard');
			}
		}
	}

	function onTryAgain() {
		//set all characters back to not found
		const copy = $characters;
		copy.forEach((char) => (char.isFound = false));
		$characters = copy;
		//reset timer
		startTime = new Date().getTime();
		currentTime = new Date().getTime();
		timer = timerComponent.start();

		dialog.close();
	}
</script>

<main class="relative flex flex-col">
	<Canvas bind:this={canvas} on:click={onClickCanvas} />
	<SceneOverlay sceneTitle={data.scene.title}>
		<SceneOverlayTimer bind:this={timerComponent} slot="timer" bind:startTime bind:currentTime />
		<div class="flex items-end justify-evenly space-x-2 px-2 pb-1" slot="characters">
			{#each $characters as character}
				<OverlayCharacter {character} />
			{/each}
		</div>
	</SceneOverlay>
	{#each $characters as character}
		{#if character.isFound === false}
			<SelectCharacter {character} {showCharacters} on:click={() => onClickCharacter(character)} />
		{/if}
	{/each}
	<dialog bind:this={dialog} class="top-1/3 rounded p-3">
		<h1 class="font-medium">Congratulations!</h1>

		<div class="flex gap-2">
			<p>You finished in</p>
			{#if currentTimeMinutes > 0}
				<p class={currentTimeMinutes > 0 ? 'visible' : 'invisible'}>
					{`${currentTimeMinutes} min`}
				</p>
			{/if}
			<p>{`${currentTimeSeconds} sec`}</p>
		</div>
		<form on:submit={onSubmit}>
			<label for="username" aria-required="true">Name:</label>
			<input
				type="text"
				name="username"
				id="username"
				required
				class="rounded border-2 border-slate-500"
			/>
			<button type="submit" class="rounded bg-waldo p-2 text-white">Submit</button>
			<button on:click={onTryAgain} class="rounded bg-where p-2 text-white">Try Again</button>
		</form>
	</dialog>
</main>
