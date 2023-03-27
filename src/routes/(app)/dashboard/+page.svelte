<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ testTablew, user } = data);
</script>

<div class="block">
	<p>Protected content for {user.email}</p>
	<p>server-side fetched data with RLS:</p>
	{#if testTablew}
		{#each testTablew as { name, continent, ...rest }}
			<div>{name} - {continent} - {rest.id} - {rest.iso2}</div>
		{/each}
	{/if}
	<pre>{JSON.stringify(testTablew, null, 2)}</pre>
</div>
<div class="block">
	<p>user:</p>
	<pre>{JSON.stringify(user, null, 2)}</pre>
</div>
