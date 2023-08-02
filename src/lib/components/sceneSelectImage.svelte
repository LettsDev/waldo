<script lang="ts">
	export let imgSrc: string;
	export let name: string;
	export let to: string;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<a href={to}>
	<img src={imgSrc} alt={`${name} image`} class="hover:opacity-30" />
</a>
