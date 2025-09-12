import type React from "react";
import { motion, type Variants } from "framer-motion";
import { SERVICES } from "../../config/services";

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
			id="services"
			aria-labelledby="services-heading"
			className="py-20">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<motion.h2
						id="services-heading"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
						Services
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2, duration: 0.6 }}
						className="text-xl text-slate-300 max-w-3xl mx-auto">
						Comprehensive web development services tailored to bring
						your vision to life with modern technologies and best
						practices.
					</motion.p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{SERVICES.map(
						(
							{ id, title, description, icon: Icon, features },
							index
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
								<ul className="space-y-2 sm:flex sm:flex-wrap sm:gap-x-4 sm:gap-y-2 sm:space-y-0">
									{features.map((feature, i) => {
										const [tech, impact] =
											feature.split("→");
										return (
											<li
												key={i}
												className="flex items-center text-sm">
												<div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
												<span className="text-slate-400">
													{tech.trim()}
												</span>
												{impact && (
													<span
														className={`ml-1 ${
															i % 2 === 0
																? "text-blue-300"
																: "text-green-300"
														}`}>
														→ {impact.trim()}
													</span>
												)}
											</li>
										);
									})}
								</ul>
							</motion.article>
						)
					)}
				</div>
			</div>
		</section>
	);
};

export default Services;
