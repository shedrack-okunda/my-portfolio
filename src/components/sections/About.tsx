import { Code } from "lucide-react";
import type React from "react";
import { PASSIONS } from "../../config/passions";
import { motion } from "framer-motion";

const About: React.FC = () => {
	return (
		<section id="about" className="py-20 bg-slate-900/50">
			<div className="container mx-auto px-6">
				{/* Heading */}
				<div className="text-center mb-16">
					<motion.h2
						initial={{ opacity: 0, y: -30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
						About Me
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2, duration: 0.6 }}
						className="text-xl text-slate-300 max-w-3xl mx-auto">
						A passionate full-stack developer with a heart for
						creating meaningful digital experiences that serve a
						greater purpose.
					</motion.p>
				</div>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					{/* Left Box */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
						<div className="text-center">
							<Code
								className="w-24 h-24 mx-auto mb-4 text-blue-400"
								aria-hidden="true"
							/>
							<p className="text-slate-300">
								Problem-Solver at Heart
							</p>
						</div>
					</motion.div>

					{/* Right Content */}
					<div className="space-y-6">
						{/* Professional Strengths */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2, duration: 0.6 }}
							className="text-lg text-slate-300 leading-relaxed">
							I'm a dedicated full-stack developer specializing in
							the MERN stack, with a passion for building
							applications that not only function beautifully but
							also deliver measurable impact. My work is driven by
							excellence, creativity, and a purpose-driven
							approach to technology.
						</motion.p>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4, duration: 0.6 }}
							className="text-lg text-slate-300 leading-relaxed">
							I thrive in building scalable systems, optimizing
							performance, and applying best practices in modern
							web development. From clean code to deployment, I
							enjoy the full lifecycle of bringing ideas to life.
						</motion.p>

						{/* Learning Mindset Note */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.6, duration: 0.6 }}
							className="text-lg text-slate-300 leading-relaxed italic">
							Always exploring new tools, frameworks, and best
							practices — because learning never stops.
						</motion.p>

						{/* Personal Hobbies */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.8, duration: 0.6 }}
							className="text-lg text-slate-300 leading-relaxed">
							Outside of coding, I find rhythm behind a drum set,
							freedom on open roads, and joy in tinkering with
							Linux systems — all of which inspire creativity in
							my work.
						</motion.p>

						{/* Passions */}
						<div className="grid grid-cols-2 gap-4 mt-8">
							{PASSIONS.map(
								(
									{ id, icon: Icon, title, description },
									idx
								) => (
									<motion.div
										key={id}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{
											delay: 0.2 * idx,
											duration: 0.5,
										}}
										whileHover={{
											scale: 1.05,
											transition: {
												type: "spring",
												stiffness: 200,
											},
										}}
										className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg cursor-default"
										role="group"
										tabIndex={0}
										aria-label={title}>
										<div className="text-blue-400">
											<Icon
												className="w-6 h-6"
												aria-hidden="true"
											/>
										</div>
										<div>
											<h4 className="font-semibold text-sm">
												{title}
											</h4>
											<p className="text-xs text-slate-400">
												{description}
											</p>
										</div>
									</motion.div>
								)
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
