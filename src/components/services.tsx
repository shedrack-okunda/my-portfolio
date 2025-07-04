import {
	Database,
	Globe,
	Palette,
	Server,
} from "lucide-react";
import type { Service } from "../types";

export const services: Service[] = [
	{
		id: "1",
		title: "Full-Stack Development",
		description:
			"Complete web applications built with the MERN stack, delivering seamless user experiences and robust backend solutions.",
		icon: <Server className="w-8 h-8" />,
		features: [
			"React/Next.js Frontend",
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
		icon: <Palette className="w-8 h-8" />,
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
		icon: <Database className="w-8 h-8" />,
		features: [
			"Node.js/Express",
			"Database Design",
			"API Development",
			"Cloud Deployment",
			"DevOps & CI/CD",
		],
	},

	{
		id: "5",
		title: "Web Consulting",
		description:
			"Strategic technical guidance to help your business leverage modern web technologies effectively.",
		icon: <Globe className="w-8 h-8" />,
		features: [
			"Technical Strategy",
			"Code Review",
			"Performance Audit",
			"Technology Selection",
			"Team Mentoring",
		],
	},
];
