<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	$: rect = canvas.getBoundingClientRect();
	export function drawImage(image: HTMLImageElement, x: number, y: number) {
		return ctx.drawImage(image, x, y);
	}
	export function setNaturalMeasurements(naturalWidth: number, naturalHeight: number) {
		// set to natural measurements to prevent pixelation of the image when size of canvas is scaled
		canvas.width = naturalWidth;
		canvas.height = naturalHeight;
	}
	export function getRect() {
		return { rectLeft: rect.left, rectRight: rect.right };
	}

	export function getDimensions() {
		return {
			canvasWidth: canvas.width,
			canvasHeight: canvas.height
		};
	}

	export function getClientDimensions() {
		return {
			clientWidth: canvas.clientWidth,
			clientHeight: canvas.clientHeight
		};
	}

	export function getPointPixelData(x: number, y: number) {
		return ctx.getImageData(x, y, 1, 1);
	}

	export function setFillStyle(style: string) {
		return (ctx.fillStyle = style);
	}

	export function drawPoint(x: number, y: number) {
		return ctx.fillRect(x, y, 1, 1);
	}

	onMount(() => {
		ctx = canvas.getContext('2d', { willReadFrequently: true }) as CanvasRenderingContext2D;
	});
</script>

<canvas bind:this={canvas} on:click />
