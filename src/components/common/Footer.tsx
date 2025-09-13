import type React from "react";
import { SOCIAL_LINKS } from "../../config/socials";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.1 },
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", stiffness: 60, damping: 12 },
	},
};

const Footer: React.FC = () => {
	return (
		<footer className="py-6 bg-slate-900 border-t border-slate-800">
			<div className="container mx-auto px-6">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={containerVariants}
					className="text-center">
					{/* Name */}
					<motion.h2
						variants={itemVariants}
						className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ">
						Shedrack Okunda
					</motion.h2>

					{/* Tagline */}
					<motion.p
						variants={itemVariants}
						className="text-slate-400 mb-6">
						Crafting digital experiences with passion and purpose.
					</motion.p>

					{/* Social Links */}
					<motion.div
						variants={itemVariants}
						className="flex justify-center space-x-6 mb-6">
						{SOCIAL_LINKS.map(({ id, href, icon: Icon, label }) => (
							<motion.a
								key={id}
								href={href}
								aria-label={label}
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.15 }}
								whileTap={{ scale: 0.95 }}
								className="text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
								<Icon className="w-6 h-6" />
							</motion.a>
						))}
					</motion.div>

					{/* Copyright */}
					<motion.p
						variants={itemVariants}
						className="text-slate-500 text-sm">
						© {new Date().getFullYear()} Shedrack Okunda. All Rights
						Reserved.
					</motion.p>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
