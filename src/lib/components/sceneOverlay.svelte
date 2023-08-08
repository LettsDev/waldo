<script lang="ts">
	export let sceneTitle: string;
</script>

<div class="left-2 top-2 rounded bg-white font-Rubik sm:absolute sm:w-2/6">
	<div class="flex items-end justify-between">
		<h2 class="pl-2 pt-2 text-sm font-medium capitalize md:text-lg">{sceneTitle}</h2>
		<!-- timer -->
		<slot name="timer" />
	</div>

	<slot name="characters" />
</div>
