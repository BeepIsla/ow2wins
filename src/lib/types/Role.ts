export enum Role {
	Tank,
	Damage,
	Support,
	MAX
}

export const RoleIcon: {
	[key in Role]: string;
} = {
	[Role.Tank]: "images/roles/tank.svg",
	[Role.Damage]: "images/roles/damage.svg",
	[Role.Support]: "images/roles/support.svg",
	[Role.MAX]: ""
} as const;

export const RoleName: {
	[key in Role]: string;
} = {
	[Role.Tank]: "Tank",
	[Role.Damage]: "Damage",
	[Role.Support]: "Support",
	[Role.MAX]: ""
} as const;
