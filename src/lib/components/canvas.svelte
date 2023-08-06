<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;

	// $: rect = canvas.getBoundingClientRect();
	export function drawImage(image: HTMLImageElement, x: number, y: number) {
		ctx = canvas.getContext('2d', { willReadFrequently: true }) as CanvasRenderingContext2D;
		return ctx.drawImage(image, x, y);
	}
	export function setNaturalMeasurements(naturalWidth: number, naturalHeight: number) {
		// set to natural measurements to prevent pixelation of the image when size of canvas is scaled
		canvas.width = naturalWidth;
		canvas.height = naturalHeight;
	}
	export function getRect() {
		let rect = canvas.getBoundingClientRect();
		return { rectLeft: rect.left, rectTop: rect.top };
	}

	function getDimensions() {
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

	function getPointPixelData(x: number, y: number) {
		return ctx.getImageData(x, y, 1, 1).data;
	}

	function setFillStyle(style: string) {
		return (ctx.fillStyle = style);
	}

	function drawPoint(x: number, y: number) {
		return ctx.fillRect(x, y, 1, 1);
	}

	export function getMousePos(clientX: number, clientY: number) {
		const { rectLeft, rectTop } = getRect();
		return { mouseX: clientX - rectLeft, mouseY: clientY - rectTop };
	}

	export function getSelectionBoxDetail(clientX: number, clientY: number) {
		const { rectLeft, rectTop } = getRect();
		//mouse pos on the canvas
		const mouseX = clientX - rectLeft;
		const mouseY = clientY - rectTop;

		const { canvasWidth, canvasHeight } = getDimensions();
		const { clientWidth, clientHeight } = getClientDimensions();

		//positioning with canvas scaling
		let canvasX = (mouseX * canvasWidth) / clientWidth;
		let canvasY = (mouseY * canvasHeight) / clientHeight;

		//selection box measurements
		const selectionBorderWidth = Math.ceil(clientWidth * 0.004);
		const selectionBoxWidth = Math.ceil(clientWidth * 0.025);
		const selectionBoxHeight = Math.ceil(clientHeight * 0.04);

		//selection box positioning - top left point of selection box
		const xCoord = Math.floor(canvasX - selectionBoxWidth / 2);
		const yCoord = Math.floor(canvasY - selectionBoxHeight / 2);

		return {
			selectionBorderWidth,
			selectionBoxWidth,
			selectionBoxHeight,
			xCoord,
			yCoord,
			mouseX,
			mouseY
		};
	}
	export function drawBox(clientX: number, clientY: number, image: HTMLImageElement) {
		const { selectionBorderWidth, selectionBoxWidth, selectionBoxHeight, xCoord, yCoord } =
			getSelectionBoxDetail(clientX, clientY);
		//redraw to clear previous box
		drawImage(image, 0, 0);

		// draw the box pixel by pixel if within the border
		for (let y = 0; y < selectionBoxHeight; y++) {
			for (let x = 0; x < selectionBoxWidth; x++) {
				const positionX = xCoord + x;
				const positionY = yCoord + y;
				if (
					//side borders
					positionX <= xCoord + selectionBorderWidth ||
					positionX >= xCoord + selectionBoxWidth - selectionBorderWidth ||
					// top bottom borders
					positionY <= yCoord + selectionBorderWidth ||
					positionY >= yCoord + selectionBoxHeight - selectionBorderWidth
				) {
					const colourData = getPointPixelData(positionX, positionY);
					const [inverseRed, inverseGreen, inverseBlue] = colourData.map((color) => 255 - color);
					setFillStyle(`rgb(${inverseRed},${inverseGreen},${inverseBlue})`);
					drawPoint(positionX, positionY);
				}
			}
		}
	}
	export function calculateCharacterSelectPositions(clientX: number, clientY: number) {
		const { selectionBorderWidth, selectionBoxWidth, selectionBoxHeight } = getSelectionBoxDetail(
			clientX,
			clientY
		);
		const { mouseX, mouseY } = getMousePos(clientX, clientY);

		//inside positions of character boxes
		const leftBoxPosX = Math.floor(mouseX - selectionBorderWidth * 2 - selectionBoxWidth);
		const leftBoxPosY = Math.floor(mouseY - selectionBoxHeight / 2);

		const topBoxPosX = Math.floor(mouseX - selectionBoxWidth * 0.5);
		const topBoxPosY = Math.floor(mouseY - selectionBorderWidth * 3 - selectionBoxHeight);

		const rightBoxPosX = Math.floor(mouseX + selectionBoxWidth / 2);
		const rightBoxPosY = Math.floor(mouseY - selectionBoxHeight / 2);

		const bottomBoxPosX = Math.floor(mouseX - selectionBoxWidth / 2);
		const bottomBoxPosY = Math.floor(mouseY + selectionBoxHeight / 2);
		return [
			{ X: leftBoxPosX, Y: leftBoxPosY },
			{ X: topBoxPosX, Y: topBoxPosY },
			{ X: rightBoxPosX, Y: rightBoxPosY },
			{ X: bottomBoxPosX, Y: bottomBoxPosY }
		];
	}

	export function getCanvasElement() {
		return canvas;
	}
</script>

<canvas bind:this={canvas} on:click class="cursor-cell" />
