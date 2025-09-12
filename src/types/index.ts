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


