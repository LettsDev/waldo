import type { SceneData } from '../types';
import { hollywood, beach, space, track, smBeach, smHollywood, smSpace, smTrack } from '$lib';
import { odlaw, smOdlaw, smWaldo, smWhitebeard, smWilma, waldo, whitebeard, wilma } from '$lib';

const scenes: SceneData[] = [
	{
		image: beach,
		alt: 'beach scene',
		smallImg: smBeach,
		title: 'at the beach',
		scene: 'beach',
		characters: [
			{
				fullPic: waldo,
				name: 'waldo',
				smallPic: smWaldo,
				isFound: false
			},
			{
				fullPic: wilma,
				name: 'wilma',
				smallPic: smWilma,
				isFound: false
			},
			{
				fullPic: whitebeard,
				name: 'whitebeard',
				smallPic: smWhitebeard,
				isFound: false
			},
			{
				fullPic: odlaw,
				name: 'odlaw',
				smallPic: smOdlaw,
				isFound: false
			}
		]
	},
	{
		image: hollywood,
		alt: 'hollywood scene',
		smallImg: smHollywood,
		title: 'hollywood',
		scene: 'hollywood',
		characters: [
			{
				fullPic: waldo,
				name: 'waldo',
				smallPic: smWaldo,
				isFound: false
			},
			{
				fullPic: wilma,
				name: 'wilma',
				smallPic: smWilma,
				isFound: false
			}
		]
	},
	{
		image: space,
		alt: 'space scene',
		smallImg: smSpace,
		title: 'in space',
		scene: 'space',
		characters: [
			{
				fullPic: waldo,
				name: 'waldo',
				smallPic: smWaldo,
				isFound: false
			},
			{
				fullPic: wilma,
				name: 'wilma',
				smallPic: smWilma,
				isFound: false
			}
		]
	},
	{
		image: track,
		alt: 'track scene',
		smallImg: smTrack,
		title: 'track and field',
		scene: 'track',
		characters: [
			{
				fullPic: waldo,
				name: 'waldo',
				smallPic: smWaldo,
				isFound: false
			},
			{
				fullPic: wilma,
				name: 'wilma',
				smallPic: smWilma,
				isFound: false
			},
			{
				fullPic: whitebeard,
				name: 'whitebeard',
				smallPic: smWhitebeard,
				isFound: false
			},
			{
				fullPic: odlaw,
				name: 'odlaw',
				smallPic: smOdlaw,
				isFound: false
			}
		]
	}
];

export default scenes;
