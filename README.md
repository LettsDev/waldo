# Where's Waldo

A picture-tagging app where users are tasked with finding characters within a crowded scene, as quickly as possible. Their scores are stored on a persistent leader board using Firestore. This app was created as part of **The Odin Project** curriculum.

[Demo](https://waldo-20f80.web.app/)

## :dark_sunglasses: Features

- uses canvas to invert colours in order to better view selections
- responsive design
- uses Firestore:
  - keep track of user's scores
  - store location data of characters
- uses stock HTML elements which are styled with TailwindCSS
- page routing using SvelteKit

## :framed_picture: Screenshots

<img  src="/src/lib/assets/IMG_6748.jpg" alt="mobile scene selection" width=30%/>
<img  src="/src/lib/assets/IMG_6749.jpg" alt="mobile leaderboard" width=30%/>
<img  src="/src/lib/assets/IMG_6750.jpg" alt="mobile scene" width=30%/>

## :hammer_and_wrench: Stack

- SvelteKit
- Vite
- Firebase & Firestore
- TailwindCSS
- TypeScript

## :memo: Dev Notes

This was my first app using svelteKit. Usually I use a React + React-Router combination, but found the straightforward approach of directory nesting appealing. Some satisfying challenges encountered:

- understanding the reactive nature of svelte through declarations (inventive alternative to `useState`)
- figuring out how to store the location of the characters in the scenes, as the backgrounds are responsive and storing pixel values wouldn't work
- working with a canvas element, as I wanted to have the selection box stand out more on busy backgrounds and found that a way to do that was with canvas
- calculate how to properly scale the selection box (and draw it!)
