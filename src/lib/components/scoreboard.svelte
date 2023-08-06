<script lang="ts">
	import type { Score } from '../../types';

	export let scene: string;
	export let scores: Score[];
</script>

<div class="w-1/2">
	<h1 class="text-2xl capitalize">{scene}</h1>
	<table class="table-auto border-collapse rounded border border-slate-300 bg-white">
		<thead class="bg-slate-50">
			<tr>
				<th class="w-1/3 border border-slate-300">User</th>
				<th class="w-1/3 border border-slate-300">Duration</th>
				<th class="w-1/3 border border-slate-300">Timestamp</th>
			</tr>
		</thead>
		<tbody>
			{#each scores as score (`${score.userName}-${score.timestamp.toDateString()}`)}
				{@const seconds = Math.floor((score.durationInSeconds % (1000 * 60)) / 1000)}
				{@const minutes = Math.floor((score.durationInSeconds % (1000 * 60 * 60)) / (1000 * 60))}
				<tr class="even:bg-slate-100">
					<td class="border border-slate-300 p-2">{score.userName}</td>
					<td class="border border-slate-300 p-2"
						>{#if minutes > 0}
							<p>{`${minutes} min`}</p>
						{/if}
						<p>{`${seconds} sec`}</p>
					</td>
					<td class="border border-slate-300 p-2">{score.timestamp.toDateString()}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
