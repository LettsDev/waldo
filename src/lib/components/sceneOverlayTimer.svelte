<script lang="ts">
	import { onMount } from 'svelte';

	export let startTime: number;
	export let currentTime: number;
	$: currentTimeSeconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);
	$: currentTimeMinutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
	$: timeElapsed = currentTime - startTime;
	let timer: NodeJS.Timer;
	onMount(() => {
		startTime = new Date().getTime();
		return () => clearInterval(timer);
	});
	export function start() {
		const timer = setInterval(() => {
			currentTime = new Date().getTime();
		}, 100);
		return timer;
	}
	export function stop() {
		clearInterval(timer);
		return currentTime;
	}
</script>

<div class="flex min-w-[100px] justify-end space-x-2 px-2 text-sm">
	{#if currentTimeMinutes > 0}
		<p class={currentTimeMinutes > 0 ? 'visible' : 'invisible'}>{`${currentTimeMinutes} min`}</p>
	{/if}
	<p>{`${currentTimeSeconds} sec`}</p>
</div>
