import {
	Database,
	Globe,
	Palette,
	Server,
	type LucideIcon,
} from "lucide-react";

export interface Service {
	id: string;
	title: string;
	description: string;
	icon: LucideIcon;
	features: string[];
}

export const SERVICES: Service[] = [
	{
		id: "1",
		title: "Full-Stack Development",
		description:
			"Complete web applications built with the MERN stack, delivering seamless user experiences and robust backend solutions.",
		icon: Server,
		features: [
			"React Frontend",
			"Node.js/Express Backend",
			"MongoDB Database",
			"RESTful APIs",
			"Authentication & Security",
		],
	},
	{
		id: "2",
		title: "Frontend Development",
		description:
			"Modern, responsive web interfaces that captivate users and provide exceptional user experiences.",
		icon: Palette,
		features: [
			"React/TypeScript",
			"Tailwind CSS",
			"Responsive Design",
			"Performance Optimization",
			"State Management",
		],
	},
	{
		id: "3",
		title: "Backend Development",
		description:
			"Scalable server-side solutions with robust APIs, database design, and cloud deployment.",
		icon: Database,
		features: [
			"Node.js/Express",
			"Database Design",
			"API Development",
			"Cloud Deployment",
			"DevOps & CI/CD",
		],
	},

	{
		id: "4",
		title: "Web Consulting",
		description:
			"Strategic technical guidance to help your business leverage modern web technologies effectively.",
		icon: Globe,
		features: [
			"Technical Strategy",
			"Code Review",
			"Performance Audit",
			"Technology Selection",
			"Team Mentoring",
		],
	},
];
