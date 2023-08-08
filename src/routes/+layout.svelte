<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
	import { smWaldo, githubLogo } from '$lib';
	const navLinks = [
		{ address: '/', text: 'Home' },
		{ address: '/scene', text: 'Scene Select' },
		{ address: '/leaderboard', text: 'Leaderboard' }
	];
</script>

<heading class=" mb-1 flex h-fit justify-between px-3 pt-1 font-Rubik">
	<div class="flex flex-wrap items-baseline text-4xl font-medium">
		<span class="  mr-2 text-where">Where's</span>
		<div class="">
			<span class=" text-waldo">Waldo</span>
			<img src={smWaldo} alt="waldo's head" class="mb-4 inline h-8" />
		</div>
	</div>
	<nav class=" mt-2 flex flex-wrap gap-x-2">
		{#each navLinks as navlink (navlink.address)}
			<a
				href={navlink.address}
				class={$page.url.pathname === navlink.address ? ' text-waldo' : ' hover:text-where'}
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
