export interface Project {
	id: string;
	title: string;
	description: string;
	technologies: string[];
	imageUrl: string;
	githubUrl: string;
	liveUrl: string;
	category: "fullstack" | "frontend" | "backend" | "mobile";
}

export interface Service {
	id: string;
	title: string;
	description: string;
	icon: React.ReactNode;
	features: string[];
}
