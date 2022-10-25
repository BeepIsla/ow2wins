<script lang="ts">
	import { getInfo, setInfo } from "$lib/helpers/LocalStorage";
	import { count } from "$lib/stores/count";
	import { Role, RoleIcon, RoleName } from "$lib/types/Role";

	export let role: Role;

	function changeValue(by: number, set: boolean): void {
		if (set) {
			$count[role] = by;
		} else {
			$count[role] += by;
		}

		if ($count[role] < 0) {
			$count[role] = 0;
		}

		// Update the local storage
		const info = getInfo();
		info.wins[role] = $count[role];
		setInfo(info);
	}
</script>

<div class="card">
	<h1 class="font-bold">{RoleName[role]}</h1>
	<img src={RoleIcon[role]} width="100" height="100" alt="role" />
	<h1 class="font-medium">{$count[role]} Win{$count[role] === 1 ? "" : "s"}</h1>

	<div class="controls">
		<button
			class="font-medium"
			disabled={$count[role] <= 0}
			on:click={changeValue.bind(undefined, -1, false)}>-</button
		>
		<button
			class="font-medium"
			disabled={$count[role] <= 0}
			on:click={changeValue.bind(undefined, 0, true)}>0</button
		>
		<button
			class="font-medium"
			disabled={$count[role] > 0xffffff}
			on:click={changeValue.bind(undefined, 1, false)}>+</button
		>
	</div>
</div>

<style>
	.card {
		width: 100%;
		height: 100%;
		background: linear-gradient(
			0deg,
			rgba(5, 170, 250, 1) 0%,
			rgba(5, 230, 250, 1) 50%,
			rgba(5, 170, 250, 1) 100%
		);
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		flex-shrink: 0;
		justify-content: space-evenly;
		align-items: center;
		border-radius: 5px;
	}

	img {
		filter: invert(85%);
	}

	h1 {
		text-transform: uppercase;
		margin-top: auto;
	}

	.font-bold {
		font-family: "Config Bold";
	}

	.font-medium {
		font-family: "Config Medium";
	}

	.controls {
		margin-top: auto;
		height: 50px;
		width: 100%;
		background-color: #ffffff;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		flex-shrink: 0;
		justify-content: space-evenly;
		align-items: center;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	button {
		height: 40px;
		width: 40px;
		font-size: x-large;
		box-shadow: none;
		border-radius: 5px;
		border-color: #000000;
		border-width: 1px;
		background-color: #ffffff;
		color: #000000;
	}

	button:hover {
		background-color: #dddddd;
		cursor: pointer;
	}

	button:disabled {
		background-color: #cccccc !important;
		color: #000000 !important;
		cursor: not-allowed !important;
	}
</style>
