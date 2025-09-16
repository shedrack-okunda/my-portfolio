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
		id: "0",
		title: "Trauma Healing & Holistic Care Website",
		description:
			"A practice focused on trauma recovery and holistic healing. The site emphasizes clarity, calm aesthetics, and user-friendly navigation while integrating best practices for SEO, accessibility, and performance.",
		technologies: ["React", "TypeScript", "Tailwindcss"],
		imageUrl: "/images/tullier.jpeg",
		githubUrl: "https://github.com/shedrack-okunda/Tullier.git",
		liveUrl: "https://tullierwellness.vercel.app/",
		category: "frontend",
	},
	{
		id: "1",
		title: "Patient-Centered Home Care Website",
		description:
			"A provider specializing in compassionate in-home patient care. The site highlights services, caregiver information, and contact options with a clean, trustworthy design, ensuring families can easily connect with caregivers and explore care options.",
		technologies: ["React", "TypeScript", "Tailwindcss"],
		imageUrl: "/images/unity.jpeg",
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
		imageUrl: "/images/educonnect.jpeg",
		githubUrl: "https://github.com/shedrack-okunda/EduConnect.git",
		liveUrl: "https://edu-connect-orcin.vercel.app/",
		category: "fullstack",
	},
];
