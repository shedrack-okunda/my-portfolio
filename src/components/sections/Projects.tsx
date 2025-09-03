import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../../types";
import React from "react";

const Projects: React.FC = () => {
	const projects: Project[] = [
		{
			id: "1",
			title: "Modern Business Landing Page",
			description:
				"A sleek, responsive business website built to showcase modern UI principles using React, Tailwind CSS, and TypeScript. Fully mobile-optimized with clean component architecture.",
			technologies: ["React", "TypeScript", "Tailwindcss"],
			imageUrl: "/images/unity.png",
			githubUrl:
				"https://github.com/shedrack-okunda/Unity-HomeCare-Services",
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
											className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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

export default Projects;
