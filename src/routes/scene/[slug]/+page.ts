import scenes from '$lib/data';
import { error } from '@sveltejs/kit';
export function load({ params }) {
	const scene = scenes.find((scene) => scene.scene === params.slug);
	if (!scene) throw error(404);
	return { scene };
}
