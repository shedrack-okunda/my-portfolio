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

export const PROJECTS: Project[] = [
	{
		id: "1",
		title: "Modern Business Landing Page",
		description:
			"A sleek, responsive business website built to showcase modern UI principles using React, Tailwind CSS, and TypeScript. Fully mobile-optimized with clean component architecture.",
		technologies: ["React", "TypeScript", "Tailwindcss"],
		imageUrl: "/images/unity.png",
		githubUrl: "https://github.com/shedrack-okunda/Unity-HomeCare-Services",
		liveUrl: "https://unity-home-care-services.vercel.app/",
		category: "frontend",
	},
	{
		id: "2",
		title: "EduConnect - Online Learning Platform",
		description:
			"Bright, engaging online learning platform connecting students and educators. Features course management, interactive lessons, and progress tracking.",
		technologies: [
			"React",
			"Node.js",
			"Express",
			"MongoDB",
			"Tailwindcss",
			"TypeScript",
		],
		imageUrl: "/images/educonnect.png",
		githubUrl: "https://github.com/shedrack-okunda/EduConnect.git",
		liveUrl: "https://edu-connect-orcin.vercel.app/",
		category: "fullstack",
	},
];
