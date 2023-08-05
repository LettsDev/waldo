export interface CharacterCoords {
	yTop: number;
	yBottom: number;
	xLeft: number;
	xRight: number;
	scene: SceneType;
	character: CharacterType;
}

export type SceneType = 'beach' | 'hollywood' | 'space' | 'track';

export type CharacterType = 'waldo' | 'wilma' | 'whitebeard' | 'odlaw';

export interface CharacterDataInterface {
	name: CharacterType;
	fullPic: string;
	smallPic: string;
	isFound: boolean;
}

export interface SceneData {
	image: string;
	alt: string;
	smallImg: string;
	title: string;
	characters: CharacterDataInterface[];
	scene: SceneType;
}

export interface Score {
	userName: string;
	timestamp: Date;
	durationInSeconds: number;
	scene: SceneType;
}
