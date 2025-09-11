import type { LucideIcon } from "lucide-react";

export interface Project {
	id: number | string;
	title: string;
	description: string;
	technologies: string[];
	imageUrl: string;
	githubUrl?: string;
	liveUrl?: string;
	category: "fullstack" | "frontend" | "backend";
}

export interface Service {
	id: string;
	title: string;
	description: string;
	icon: LucideIcon;
	features: string[];
}
