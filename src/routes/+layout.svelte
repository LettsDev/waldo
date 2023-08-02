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

<heading class=" mb-2 flex justify-between px-3 pt-1 font-Rubik">
	<div class="flex items-baseline">
		<h1 class="  text-5xl font-bold">
			<span class="text-where">Where's</span> <span class="text-waldo">Waldo</span>
			<span>
				<img src={smWaldo} alt="waldo's head" class="inline h-11 pb-2" />
			</span>
		</h1>
	</div>
	<nav class="ml-4 flex flex-wrap items-end">
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

<footer class=" my-2 flex items-center justify-end pr-3 font-Roboto font-medium">
	<a href="https://github.com/LettsDev" class="flex">
		<p class="mr-2">LettsDev 2023</p>
		<img src={githubLogo} alt="github" class="max-h-6" />
	</a>
</footer>
