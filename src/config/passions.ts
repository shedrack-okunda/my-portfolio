import { Code, Mountain, type LucideIcon } from "lucide-react";

export interface Passions {
	id: string;
	title: string;
	description: string;
	icon: LucideIcon;
}

export const PASSIONS: Passions[] = [
	{
		id: "development",
		title: "Full-Stack Development",
		description:
			"Crafting scalable web applications with modern technologies.",
		icon: Code,
	},
	{
		id: "linux",
		title: "Linux Enthusiast",
		description:
			"Embracing open-source philosophy and system optimization.",
		icon: Mountain,
	},
];
