<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<main class="flex flex-col space-y-2 px-4 font-Rubik">
	{#each data.scenes as scene}
		<div class="relative hover:cursor-pointer hover:opacity-80">
			<a href={`/scene/${scene.scene}`}>
				<img src={scene.smallImg} alt={scene.alt} class="rounded" />
			</a>
			<div class="absolute left-2 top-2 rounded bg-white p-1">
				<h3 class="capitalize">{scene.title}</h3>
				<div class="flex">
					{#each scene.characters as character}
						<div class="flex flex-col items-center justify-center p-1">
							<img src={character.smallPic} alt={`picture of ${character.name}`} class="w-5" />
							<p class="font-Roboto text-sm capitalize">{character.name}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</main>
