import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../../config/navigation";
import { SOCIAL_LINKS } from "../../config/socials";

const Footer: React.FC = () => {
	return (
		<footer className="py-8 bg-slate-900 border-t border-slate-800">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="flex flex-col items-center text-center max-w-2xl mx-auto"
				>
					{/* Name & Tagline */}
					<h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
						Shedrack Okunda
					</h2>
					<p className="text-slate-400 text-sm mt-2 mb-6">
						Building scalable web applications and crafting clean digital
						experiences with purpose.
					</p>

					{/* Quick Navigation with Icons */}
					<nav
						aria-label="Footer Navigation"
						className="flex flex-wrap justify-center gap-6 mb-6"
					>
						{NAV_LINKS.map(({ path, label, icon: Icon }) => (
							<Link
								key={label}
								to={path}
								className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200"
							>
								<Icon className="w-4 h-4 text-blue-400" />
								<span>{label}</span>
							</Link>
						))}
					</nav>

					{/* Social Links */}
					<div className="flex space-x-6 mb-6">
						{SOCIAL_LINKS.map(({ id, href, icon: Icon, label }) => (
							<motion.a
								key={id}
								href={href}
								aria-label={label}
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.15 }}
								whileTap={{ scale: 0.95 }}
								className="text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
							>
								<Icon className="w-5 h-5" />
							</motion.a>
						))}
					</div>

					{/* Copyright */}
					<p className="text-slate-500 text-xs">
						© {new Date().getFullYear()} Shedrack Okunda. All Rights Reserved.
					</p>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
