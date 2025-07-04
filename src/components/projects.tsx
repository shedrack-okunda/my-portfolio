import React from "react";

const [selectedProject, setSelectedProject] = React.useState<Project | null>(
	null
);

export const project = () => {}

interface Project {
	id: string;
	title: string;
	description: string;
	technologies: string[];
	imageUrl: string;
	githubUrl: string;
	liveUrl: string;
	category: "fullstack" | "frontend" | "backend" | "mobile";
}

export const projects: Project[] = [
	{
		id: "1",
		title: "ECommerce Platform",
		description:
			"Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
		technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
		imageUrl:
			"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
		githubUrl: "https://github.com/yourusername/ecommerce",
		liveUrl: "https://ecommerce-demo.vercel.app",
		category: "fullstack",
	},
	{
		id: "2",
		title: "Real Estate App",
		description:
			"Property listing platform with advanced search, virtual tours, and agent management system.",
		technologies: ["React", "TypeScript", "Express", "PostgreSQL", "AWS"],
		imageUrl:
			"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
		githubUrl: "https://github.com/yourusername/realestate",
		liveUrl: "https://realestate-demo.vercel.app",
		category: "fullstack",
	},
	{
		id: "3",
		title: "Task Management Dashboard",
		description:
			"Collaborative project management tool with real-time updates, team collaboration, and analytics.",
		technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Chart.js"],
		imageUrl:
			"https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
		githubUrl: "https://github.com/yourusername/taskmanager",
		liveUrl: "https://taskmanager-demo.vercel.app",
		category: "fullstack",
	},
	{
		id: "4",
		title: "Fitness Tracking App",
		description:
			"Mobile-first fitness application with workout tracking, progress analytics, and social features.",
		technologies: [
			"React Native",
			"Firebase",
			"Redux",
			"Charts",
			"Push Notifications",
		],
		imageUrl:
			"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
		githubUrl: "https://github.com/yourusername/fitness",
		liveUrl: "https://fitness-demo.vercel.app",
		category: "mobile",
	},
];
