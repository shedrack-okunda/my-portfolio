import type React from "react";
import { motion, type Variants } from "framer-motion";
import { PERSONAL_INFO } from "../../config/personal";

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.15 },
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", stiffness: 70, damping: 15 },
	},
};

const Contact: React.FC = () => {
	return (
		<section id="contact" className="py-20">
			<div className="container mx-auto px-6">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
						Let's Connect
					</h2>
					<p className="text-xl text-slate-300 max-w-3xl mx-auto">
						Ready to bring your ideas to life? Let's discuss how we
						can work together to create something extraordinary.
					</p>
				</motion.div>

				<div className="max-w-4xl mx-auto">
					{/* <div className="grid md:grid-cols-2 gap-12"> */}
					{/* Contact Info */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						className="flex flex-col lg:flex-row lg:flex-wrap lg:gap-8 gap-6">
						{PERSONAL_INFO.map(
							({ icon: Icon, title, detail }, i) => (
								<motion.div
									key={i}
									variants={itemVariants}
									className="flex items-center space-x-4 group">
									<div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-500/30">
										<Icon className="w-6 h-6 text-blue-400" />
									</div>
									<div>
										<h3 className="font-semibold group-hover:text-blue-400 transition-colors duration-200">
											{title}
										</h3>
										<p className="text-slate-400">
											{detail}
										</p>
									</div>
								</motion.div>
							)
						)}
					</motion.div>
					{/* </div> */}
				</div>
			</div>
		</section>
	);
};

export default Contact;
