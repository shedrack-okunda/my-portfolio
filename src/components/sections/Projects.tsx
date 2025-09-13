import { ExternalLink, Github } from "lucide-react";
import React from "react";
import { PROJECTS } from "../../config/projects";
import { motion, type Variants } from "framer-motion";

// Container animation: stagger children
const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.15,
		},
	},
};

// Card animation: fade + slight slide up
const cardVariants: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", stiffness: 60, damping: 12 },
	},
};

const Projects: React.FC = () => {
	return (
		<section id="projects" className="py-20 bg-slate-900/50">
			<div className="container mx-auto px-6">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16">
					<motion.h2
						id="projects-heading"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ">
						Featured Projects
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2, duration: 0.6 }}
						className="text-xl text-slate-300 max-w-3xl mx-auto">
						A showcase of my recent work, demonstrating expertise in
						full-stack development and modern web technologies.
					</motion.p>
				</motion.div>

				{/* Projects Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="grid md:grid-cols-2 gap-8">
					{PROJECTS.map(
						({
							id,
							title,
							description,
							technologies,
							category,
							imageUrl,
							githubUrl,
							liveUrl,
						}) => (
							<motion.div
								key={id}
								variants={cardVariants}
								className="group focus-within:ring-2 focus-within:ring-blue-500 rounded-2xl">
								<div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg focus-within:border-blue-500/50">
									{/* Project Image */}
									<div className="relative h-48 overflow-hidden">
										<motion.img
											src={imageUrl}
											alt={title}
											className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
											whileHover={{ scale: 1.08 }}
											transition={{
												type: "spring",
												stiffness: 80,
											}}
											loading="lazy"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
										<div className="absolute top-4 right-4">
											<span className="px-3 py-1 bg-blue-500/80 backdrop-blur-sm rounded-full text-xs font-medium">
												{category}
											</span>
										</div>
									</div>

									{/* Content */}
									<div className="p-6">
										<h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-200">
											{title}
										</h3>
										<p className="text-slate-300 mb-4 leading-relaxed">
											{description}
										</p>

										{/* Tech Stack */}
										<div className="flex flex-wrap gap-2 mb-6">
											{technologies.map((tech, index) => (
												<span
													key={index}
													className="px-2 py-1 bg-slate-700 rounded text-xs">
													{tech}
												</span>
											))}
										</div>

										{/* Links */}
										<div className="flex space-x-4">
											{githubUrl && (
												<a
													href={githubUrl}
													target="_blank"
													rel="noopener noreferrer"
													aria-label={`View source code for ${title}`}
													className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
													<Github className="w-4 h-4" />
													<span>Code</span>
												</a>
											)}
											{liveUrl && (
												<a
													href={liveUrl}
													target="_blank"
													rel="noopener noreferrer"
													aria-label={`View live demo of ${title}`}
													className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
													<ExternalLink className="w-4 h-4" />
													<span>Live Demo</span>
												</a>
											)}
										</div>
									</div>
								</div>
							</motion.div>
						)
					)}
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
