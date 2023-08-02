import type { PageLoad } from './$types';
import scenes from '$lib/data';
export const load = (() => {
	return {
		scenes
	};
}) satisfies PageLoad;
