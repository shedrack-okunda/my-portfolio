import { Mail, MapPin, Phone } from "lucide-react";
import type React from "react";
import { motion, type Variants } from "framer-motion";

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

const formVariants: Variants = {
	hidden: { opacity: 0, scale: 0.95 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.5, ease: "easeOut" },
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
					<div className="grid md:grid-cols-2 gap-12">
						{/* Contact Info */}
						<motion.div
							variants={containerVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
							className="space-y-8">
							{[
								{
									icon: Mail,
									title: "Email",
									detail: "okundashedrack@gmail.com",
								},
								{
									icon: Phone,
									title: "Phone",
									detail: "+254 720 260 412",
								},
								{
									icon: MapPin,
									title: "Nairobi, Kenya",
									detail: "Available for remote work",
								},
							].map(({ icon: Icon, title, detail }, i) => (
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
							))}
						</motion.div>

						{/* Contact Form */}
						<motion.div
							variants={formVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
							className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
							<form
								className="space-y-6"
								aria-label="Contact form">
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
										required
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
										required
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
										placeholder="Tell me about your project..."
										required></textarea>
								</div>

								<motion.button
									type="submit"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.97 }}
									className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
									Send Message
								</motion.button>
							</form>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
