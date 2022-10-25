<script lang="ts">
	import Card from "$lib/components/Card.svelte";
	import { getInfo } from "$lib/helpers/LocalStorage";
	import { count } from "$lib/stores/count";
	import { Role } from "$lib/types/Role";
	import { onMount } from "svelte";

	onMount(() => {
		const info = getInfo();
		count.set(info.wins);
	});
</script>

<div class="row">
	{#each Array(Role.MAX) as _, i}
		<div class="column">
			<Card role={i} />
		</div>
	{/each}
</div>

<style>
	.row {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		flex-shrink: 0;
		justify-content: space-evenly;
		align-items: center;
		height: 100vh;
	}

	.column {
		margin: 5px;
		flex-shrink: 0;
		width: 353px;
		height: 493px;
	}
</style>
