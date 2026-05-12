import type React from "react";
import { motion, type Variants } from "framer-motion";
import { SERVICES } from "../../config/skills";

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: (custom: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
	}),
};

const Services: React.FC = () => {
	return (
		<section
			id="skills"
			aria-labelledby="services-heading"
			className="py-20">
			<div className="container mx-auto px-6">
				{/* Section header */}
				<div className="text-center mb-16">
					<motion.h2
						id="services-heading"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
						Tech Stack & Expertise{" "}
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2, duration: 0.6 }}
						className="text-xl text-slate-300 max-w-3xl mx-auto">
						Technologies, tools, and development practices I use to
						build scalable, responsive, and modern web applications.
					</motion.p>
				</div>

				{/* Services grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{SERVICES.map(
						(
							{ id, title, description, icon: Icon, features },
							index,
						) => (
							<motion.article
								key={id}
								variants={cardVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								custom={index}
								whileHover={{
									scale: 1.05,
									transition: {
										type: "spring",
										stiffness: 200,
									},
								}}
								className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-colors duration-300"
								aria-labelledby={`service-${id}`}>
								<div className="text-blue-400 mb-6 group-hover:text-blue-300 transition-colors duration-200">
									<Icon
										className="w-8 h-8"
										aria-hidden="true"
									/>
								</div>

								<h3
									id={`service-${id}`}
									className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-200">
									{title}
								</h3>

								<p className="text-slate-300 mb-6 leading-relaxed">
									{description}
								</p>
								<div className="flex flex-wrap gap-2 mt-4">
									{features.map((feature) => (
										<span
											key={feature}
											className="px-3 py-1 rounded-full bg-slate-700/50 border border-slate-600 text-sm text-slate-300">
											{feature}
										</span>
									))}
								</div>
							</motion.article>
						),
					)}
				</div>
			</div>
		</section>
	);
};

export default Services;
