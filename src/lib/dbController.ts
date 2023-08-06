import type { Score } from '../types';
import { db } from './firebase';
import { doc, getDoc, addDoc, collection, getDocs } from 'firebase/firestore';

export async function getDocument(collection: string, docID: string) {
	try {
		const docSnap = await getDoc(doc(db, collection, docID));
		return docSnap;
	} catch (e) {
		console.error('query error: ' + e);
	}
}

export async function save(collect: string, data: Score) {
	await addDoc(collection(db, collect), data);
}

export async function getCollection(collect: string) {
	const querySnapshot = await getDocs(collection(db, collect));
	return querySnapshot;
}
