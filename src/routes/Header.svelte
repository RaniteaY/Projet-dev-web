<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header>
	<div class="corner">
		<a href="https://sveltejs-kit-template-default-cbwjrh--5173.local-credentialless.webcontainer.io/accueil">
			<img src="https://clcsnqhqseekhffdrdag.supabase.co/storage/v1/object/public/images/logo_note.png?t=2022-11-15T15%3A03%3A50.493Z" alt="Logo" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>

			<li class:active={$page.url.pathname === '/accueil'}>
				<a href="/accueil">Ma librairie</a>
			</li>
			
			<li class:active={$page.url.pathname === '/new_music'}>
				<a href="/new_music">Ajouter</a>
			</li>

			<li class:active={$page.url.pathname === '/contact'}>
				<a href="/contact">Contact</a>
			</li>
		
		</ul>

		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>

		
	</nav>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<!-- <img src={github} alt="GitHub" /> -->
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		
	}

	.search_container{
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	.corner {
		width: 5em;
		height: 5em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 4em;
		height: 4em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		/* background-color: #EE048A; */
		/* --background: #EE048A; */
		--background: #9D14F7;
		/* vertical-align: baseline; */
		
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
		
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
		background-color: #FFB210;
		/* opacity: 0.8 */
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		/* --size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1); */
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		font-family: fantasy;
		/* background-color: red; */
	}

	a:hover {
		/* color: var(--color-theme-1); */
		color: #9D14F7;
	}
</style>
