<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';
	import {
		PUBLIC_SUPABASE_REF,
		PUBLIC_SUPABASE_STUDIO,
		PUBLIC_SUPABASE_URL
	} from '$env/static/public';

	inject({ mode: dev ? 'development' : 'production' });

	export let data: LayoutData;

	$: ({ supabase } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => subscription.unsubscribe();
	});
</script>

<svelte:head>
	<title>Supabase Auth Helpers Demo</title>
</svelte:head>
<div class="w-full h-full flex">
	<div class="w-full mx-24 my-12">
		<h1>tt-sk-app1</h1>
		<ul>
			<li>
				<b class="badge">api</b>
				<a target="_blank" href={PUBLIC_SUPABASE_URL}>{PUBLIC_SUPABASE_URL}</a>
			</li>
			<li>
				<b class="badge">studio</b>
				<a target="_blank" href={PUBLIC_SUPABASE_STUDIO}>{PUBLIC_SUPABASE_STUDIO}</a>
			</li>
		</ul>
		<div class="w-full">
			<slot />
		</div>
	</div>
</div>
