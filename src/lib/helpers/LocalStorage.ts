import { Role } from "$lib/types/Role";

type LocalStorageInfo = { wins: { [key in Role]: number } };

export function getInfo(): LocalStorageInfo {
	try {
		const info = localStorage.getItem("info");
		if (!info) {
			return {
				wins: {
					[Role.Tank]: 0,
					[Role.Damage]: 0,
					[Role.Support]: 0,
					[Role.MAX]: 0
				}
			};
		}

		return JSON.parse(info);
	} catch (err) {
		console.error(err);
		return {
			wins: {
				[Role.Tank]: 0,
				[Role.Damage]: 0,
				[Role.Support]: 0,
				[Role.MAX]: 0
			}
		};
	}
}

export function setInfo(info: LocalStorageInfo): void {
	const str = JSON.stringify(info);
	localStorage.setItem("info", str);
}
