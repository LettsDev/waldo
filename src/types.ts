export interface CharacterCoords {
	yTop: number;
	yBottom: number;
	xLeft: number;
	xRight: number;
	scene: SceneType;
	character: CharacterType;
}

type SceneType = 'beach' | 'hollywood' | 'space' | 'track';

type CharacterType = 'waldo' | 'wilma' | 'whitebeard' | 'odlaw';

export interface CharacterData {
	name: CharacterType;
	fullPic: string;
	smallPic: string;
}

export interface SceneData {
	image: string;
	alt: string;
	smallImg: string;
	title: string;
	characters: CharacterData[];
	scene: SceneType;
}

export interface Score {
	userName: string;
	timestamp: Date;
	durationInSeconds: number;
	scene: SceneType;
}
