import {
	Car,
	Code,
	Heart,
	Mountain,
	Music,
	type LucideIcon,
} from "lucide-react";

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
	{
		id: "drumming",
		title: "Drumming",
		description: "Finding rhythm and creativity through percussion.",
		icon: Music,
	},
	{
		id: "driving",
		title: "Driving Adventures",
		description:
			"Exploring new horizons and finding inspiration on the road.",
		icon: Car,
	},
	{
		id: "kingdom-minded",
		title: "Kingdom Minded",
		description: "Living with purpose and spiritual conviction.",
		icon: Heart,
	},
];
