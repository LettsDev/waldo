<script lang="ts">
	export let sceneTitle: string;
</script>

<div class="absolute left-2 top-2 rounded bg-white font-Rubik">
	<div class="flex items-end justify-between">
		<h2 class="pl-2 pt-2 text-xl font-medium capitalize">{sceneTitle}</h2>
		<!-- timer -->
		<slot name="timer" />
	</div>

	<slot name="characters" />
</div>
