import React from "react";
import {
	Github,
	Linkedin,
	Mail,
	Phone,
	MapPin,
	Code,
	ExternalLink,
} from "lucide-react";
import { services } from "../components/services";
import { passions } from "../components/passions";
import { Navigation } from "../layouts/Navigation";
import { Hero } from "./Hero";

// Types
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

const Home: React.FC = () => {
	const [selectedProject, setSelectedProject] =
		React.useState<Project | null>(null);

	const projects: Project[] = [
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



	return (
		<div className="min-h-screen bg-slate-950 text-white">
			{/* Navigation */}
			<Navigation />

			{/* Hero Section */}
		<Hero/>

			{/* About Section */}
			<section id="about" className="py-20 bg-slate-900/50">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
							About Me
						</h2>
						<p className="text-xl text-slate-300 max-w-3xl mx-auto">
							A passionate full-stack developer with a heart for
							creating meaningful digital experiences that serve a
							greater purpose.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
								<div className="text-center">
									<Code className="w-24 h-24 mx-auto mb-4 text-blue-400" />
									<p className="text-slate-300">
										Developer at Heart
									</p>
								</div>
							</div>
						</div>

						<div className="space-y-6">
							<p className="text-lg text-slate-300 leading-relaxed">
								I'm a dedicated full-stack developer
								specializing in the MERN stack, with a passion
								for building applications that not only function
								beautifully but also serve a meaningful purpose.
								My journey in development is driven by
								excellence, creativity, and a kingdom-minded
								approach to technology.
							</p>

							<p className="text-lg text-slate-300 leading-relaxed">
								When I'm not coding, you'll find me behind a
								drum set finding rhythm and inspiration,
								exploring new roads while driving, or diving
								deep into Linux systems. I believe that worship
								and technology can beautifully intersect to
								create something greater than the sum of their
								parts.
							</p>

							<div className="grid grid-cols-2 gap-4 mt-8">
								{passions.map((passion, index) => (
									<div
										key={index}
										className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg">
										<div className="text-blue-400">
											{passion.icon}
										</div>
										<div>
											<h4 className="font-semibold text-sm">
												{passion.title}
											</h4>
											<p className="text-xs text-slate-400">
												{passion.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id="services" className="py-20">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
							Services
						</h2>
						<p className="text-xl text-slate-300 max-w-3xl mx-auto">
							Comprehensive web development services tailored to
							bring your vision to life with modern technologies
							and best practices.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{services.map((service) => (
							<div key={service.id} className="group">
								<div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
									<div className="text-blue-400 mb-6 group-hover:text-blue-300 transition-colors duration-200">
										{service.icon}
									</div>

									<h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-200">
										{service.title}
									</h3>

									<p className="text-slate-300 mb-6 leading-relaxed">
										{service.description}
									</p>

									<ul className="space-y-2">
										{service.features.map(
											(feature, index) => (
												<li
													key={index}
													className="flex items-center text-sm text-slate-400">
													<div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
													{feature}
												</li>
											)
										)}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Projects Section */}
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

			{/* Contact Section */}
			<section id="contact" className="py-20">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
							Let's Connect
						</h2>
						<p className="text-xl text-slate-300 max-w-3xl mx-auto">
							Ready to bring your ideas to life? Let's discuss how
							we can work together to create something
							extraordinary.
						</p>
					</div>

					<div className="max-w-4xl mx-auto">
						<div className="grid md:grid-cols-2 gap-12">
							<div className="space-y-8">
								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
										<Mail className="w-6 h-6 text-blue-400" />
									</div>
									<div>
										<h3 className="font-semibold">Email</h3>
										<p className="text-slate-400">
											your.email@example.com
										</p>
									</div>
								</div>

								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
										<Phone className="w-6 h-6 text-blue-400" />
									</div>
									<div>
										<h3 className="font-semibold">Phone</h3>
										<p className="text-slate-400">
											+1 (555) 123-4567
										</p>
									</div>
								</div>

								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
										<MapPin className="w-6 h-6 text-blue-400" />
									</div>
									<div>
										<h3 className="font-semibold">
											Location
										</h3>
										<p className="text-slate-400">
											Available for remote work
										</p>
									</div>
								</div>
							</div>

							<div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
								<form className="space-y-6">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium mb-2">
											Name
										</label>
										<input
											type="text"
											id="name"
											className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
											placeholder="Your Name"
										/>
									</div>

									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium mb-2">
											Email
										</label>
										<input
											type="email"
											id="email"
											className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
											placeholder="your.email@example.com"
										/>
									</div>

									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium mb-2">
											Message
										</label>
										<textarea
											id="message"
											rows={4}
											className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
											placeholder="Tell me about your project..."></textarea>
									</div>

									<button
										type="submit"
										className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
										Send Message
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-12 bg-slate-900 border-t border-slate-800">
				<div className="container mx-auto px-6">
					<div className="text-center">
						<div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
							Portfolio
						</div>
						<p className="text-slate-400 mb-6">
							Crafting digital experiences with passion and
							purpose
						</p>
						<div className="flex justify-center space-x-6 mb-6">
							<a
								href="https://github.com/yourusername"
								className="text-slate-400 hover:text-white transition-colors duration-200">
								<Github className="w-6 h-6" />
							</a>
							<a
								href="https://linkedin.com/in/yourusername"
								className="text-slate-400 hover:text-white transition-colors duration-200">
								<Linkedin className="w-6 h-6" />
							</a>
							<a
								href="mailto:your.email@example.com"
								className="text-slate-400 hover:text-white transition-colors duration-200">
								<Mail className="w-6 h-6" />
							</a>
						</div>
						<p className="text-slate-500 text-sm">
							© 2025 Your Name. Built with React, TypeScript, and
							Tailwind CSS.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Home;
