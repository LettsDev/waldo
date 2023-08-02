<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
	import { smWaldo, githubLogo } from '$lib';

	console.log($page.url.pathname);
	const navLinks = [
		{ address: '/', text: 'Home' },
		{ address: '/scene', text: 'Scene Select' },
		{ address: '/leaderboard', text: 'Leaderboard' }
	];
</script>

<heading class=" flex justify-between px-3 font-Rubik">
	<div class="flex items-baseline">
		<h1 class="  text-5xl font-bold">
			<span class="text-where">Where's</span> <span class="text-waldo">Waldo</span>
		</h1>

		<img src={smWaldo} alt="waldo's head" class="max-h-24" />
	</div>
	<nav class="flex items-end space-x-4 text-xl">
		{#each navLinks as navlink (navlink.address)}
			<a
				href={navlink.address}
				class={$page.url.pathname === navlink.address ? 'text-waldo' : 'hover:text-where'}
				>{navlink.text}
			</a>
		{/each}
	</nav>
</heading>

<slot />

<footer class=" flex items-center justify-end pr-3">
	<a href="https://github.com/LettsDev" class="flex">
		<p class="mr-2">LettsDev 2023</p>
		<img src={githubLogo} alt="github" class="max-h-6" />
	</a>
</footer>
