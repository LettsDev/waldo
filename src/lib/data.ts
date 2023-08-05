import type { SceneData } from '../types';
import { hollywood, beach, space, track, smBeach, smHollywood, smSpace, smTrack } from '$lib';
import { odlaw, smOdlaw, smWaldo, smWhitebeard, smWilma, waldo, whitebeard, wilma } from '$lib';

// WILMA hollywood
// {
//     yTop: 0.6640768398582714,
//     yBottom: 0.6778308858465465,
//     xLeft: 0.5857623318385651,
//     xRight:0.6025784753363229,
//   }
// Waldo hollywood
// {
//     yTop:0.42042271710824275,
//     yBottom: 0.4356401084125906,
//     xLeft:0.6962616822429907,
//     xRight: 0.7098130841121495,
//   }
// WILMA space
// {
//     yTop: 0.509711390780252,
//     yBottom: 0.5366808726823101,
//     xLeft: 0.28785046728971964,
//     xRight: 0.29906542056074764,
//   }

// Waldo space
// {
//     yTop: 0.6175893183884847,
//     yBottom: 0.6388810146269518,
//     xLeft: 0.3981308411214953,
//     xRight: 0.4102803738317757,
//   }
// WILMA beach
// {
//     yTop: 0.40042455192910187,
//     yBottom: 0.4186196028752445,
//     xLeft: 0.7649532710280373,
//     xRight: 0.780373831775701,
//   }

// WALDO beach
// {
//     yTop: 0.3684012622638908,
//     yBottom: 0.40843037434540463,
//     xLeft: 0.6093457943925233,
//     xRight: 0.6275700934579439,
//   }
// BEARD beach
// {
//     yTop: 0.34001698278790826,
//     yBottom: 0.38077389690726776,
//     xLeft: 0.26401869158878505,
//     xRight: 0.2864485981308411,
//   }

// ODLAW beach
// {
//     yTop: 0.3487506072420567,
//     yBottom: 0.38441290709649634,
//     xLeft: 0.1014018691588785,
//     xRight:  0.11401869158878504,
//   }
// WILMA track
// {
//     yTop: 0.7115744277559963,
//     yBottom: 0.7418327303390222,
//     xLeft: 0.24532710280373832,
//     xRight: 0.2565420560747664,
//   }

// WALDO track
// {
//     yTop: 0.3233825458371771,
//     yBottom: 0.36987701078182655,
//     xLeft: 0.2696261682242991,
//     xRight: 0.2925233644859813,
//   }

// BEARD track
// {
//     yTop: 0.845891770929428,
//     yBottom: 0.8798401104128228,
//     xLeft: 0.6046728971962617,
//     xRight: 0.6327102803738318,
//   }
// ODLAW track
// {
//     yTop: 0.6318696307080258,
//     yBottom:0.6672939849515682 ,
//     xLeft: 0.5911214953271028,
//     xRight:0.6056074766355141 ,
//   }

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
