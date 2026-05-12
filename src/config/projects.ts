export interface Project {
	id: number | string;
	title: string;
	description: string;
	technologies: string[];
	imageUrl: string;
	githubUrl?: string;
	liveUrl?: string;
	category: "fullstack" | "frontend" | "backend";
	features?: string[];
	challenges?: string;
}

export const PROJECTS: Project[] = [
	{
		id: "0",
		title: "EduConnect - Online Learning Platform",
		description:
			"A full-stack e-learning platform connecting students and educators with course management, lessons, and progress tracking.",

		features: [
			"User authentication (JWT)",
			"Course creation & management",
			"Progress tracking system",
			"REST API integration",
			"Responsive dashboard UI",
		],

		challenges:
			"Managing role-based authentication and designing scalable course-data relationships between users, courses, and progress tracking.",

		technologies: [
			"React",
			"Node.js",
			"Express",
			"MongoDB",
			"TypeScript",
			"TailwindCSS",
		],

		imageUrl: "/images/educonnect.jpeg",
		githubUrl: "https://github.com/shedrack-okunda/EduConnect.git",
		liveUrl: "https://edu-connect-orcin.vercel.app/",
		category: "fullstack",
	},

	{
		id: "1",
		title: "Patient-Centered Home Care Website",
		description:
			"A professional healthcare service website designed to present home care services, caregiver details, and patient support information.",

		features: [
			"Service listings",
			"Contact & inquiry system",
			"Responsive UI design",
			"SEO-friendly structure",
		],

		challenges:
			"Creating a trustworthy UI experience for healthcare users while maintaining clarity, accessibility, and emotional design balance.",

		technologies: ["React", "TypeScript", "TailwindCSS"],

		imageUrl: "/images/unity.jpeg",
		githubUrl: "https://github.com/shedrack-okunda/Unity-HomeCare-Services",
		liveUrl: "https://unity-homecare.vercel.app/",
		category: "frontend",
	},

	{
		id: "2",
		title: "Trauma Healing & Holistic Care Website",
		description:
			"A wellness-focused platform designed to communicate trauma healing services with calm UI, accessibility, and performance optimization.",

		features: [
			"SEO optimization",
			"Accessibility improvements",
			"Responsive design",
			"Clean UI/UX layout",
		],

		challenges:
			"Designing a calm, emotionally sensitive interface while maintaining performance and accessibility standards.",

		technologies: ["React", "TypeScript", "TailwindCSS"],

		imageUrl: "/images/tullier.jpeg",
		githubUrl: "https://github.com/shedrack-okunda/Tullier.git",
		liveUrl: "https://tullierwellness.vercel.app/",
		category: "frontend",
	},
];
