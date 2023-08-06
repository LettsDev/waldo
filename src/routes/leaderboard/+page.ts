import { getCollection } from '$lib/dbController';
import { error } from '@sveltejs/kit';
import type { Score } from '../../types';

export async function load() {
	// load in the leaderboard stats from the db
	const scoresData = await getCollection('scores');
	const scores: Score[] = [];
	scoresData.forEach((score) => {
		const data = score.data();
		scores.push({
			userName: data.userName,
			timestamp: data.timestamp.toDate(),
			durationInSeconds: data.durationInSeconds,
			scene: data.scene
		});
	});

	if (!scores) throw error(404);
	return { scores };
}
