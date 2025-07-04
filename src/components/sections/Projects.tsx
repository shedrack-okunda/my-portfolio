import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../../types";
import React from "react";

export const Projects = () => {
	const [selectedProject, setSelectedProject] =
		React.useState<Project | null>(null);
	console.log(selectedProject, setSelectedProject);

	const projects: Project[] = [
		{
			id: "1",
			title: "ECommerce Platform",
			description:
				"Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
			technologies: ["React", "Node.js", "MongoDB", "JWT"],
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
			technologies: [
				"React",
				"TypeScript",
				"Express",
				"PostgreSQL",
				"AWS",
			],
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
			technologies: [
				"React",
				"Socket.io",
				"Node.js",
				"MongoDB",
				"Chart.js",
			],
			imageUrl:
				"https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
			githubUrl: "https://github.com/yourusername/taskmanager",
			liveUrl: "https://taskmanager-demo.vercel.app",
			category: "fullstack",
		},
	];

	return (
		<>
			<section id="projects" className="py-20 bg-slate-900/50">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
							Featured Projects
						</h2>
						<p className="text-xl text-slate-300 max-w-3xl mx-auto">
							A showcase of my recent work, demonstrating
							expertise in full-stack development and modern web
							technologies.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{projects.map((project) => (
							<div key={project.id} className="group">
								<div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
									<div className="relative h-48 overflow-hidden">
										<img
											src={project.imageUrl}
											alt={project.title}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
										<div className="absolute top-4 right-4">
											<span className="px-3 py-1 bg-blue-500/80 backdrop-blur-sm rounded-full text-xs font-medium">
												{project.category}
											</span>
										</div>
									</div>

									<div className="p-6">
										<h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-200">
											{project.title}
										</h3>

										<p className="text-slate-300 mb-4 leading-relaxed">
											{project.description}
										</p>

										<div className="flex flex-wrap gap-2 mb-6">
											{project.technologies.map(
												(tech, index) => (
													<span
														key={index}
														className="px-2 py-1 bg-slate-700 rounded text-xs">
														{tech}
													</span>
												)
											)}
										</div>

										<div className="flex space-x-4">
											<a
												href={project.githubUrl}
												className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-200">
												<Github className="w-4 h-4" />
												<span>Code</span>
											</a>
											<a
												href={project.liveUrl}
												className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-200">
												<ExternalLink className="w-4 h-4" />
												<span>Live Demo</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};
