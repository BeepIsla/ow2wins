import { Role } from "$lib/types/Role";
import { writable } from "svelte/store";

export const count = writable<{ [key in Role]: number }>({
	[Role.Tank]: 0,
	[Role.Damage]: 0,
	[Role.Support]: 0,
	[Role.MAX]: 0
});
