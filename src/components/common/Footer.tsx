import type React from "react";
import { SOCIAL_LINKS } from "../../config/socials";

const Footer: React.FC = () => {
	return (
		<footer className="py-6 bg-slate-900 border-t  border-slate-800">
			<div className="container mx-auto px-6">
				<div className="text-center">
					<div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
						Shedrack Okunda
					</div>
					<p className="text-slate-400 mb-6">
						Crafting digital experiences with passion and purpose.
					</p>
					<div className="flex justify-center space-x-6 mb-6">
						{SOCIAL_LINKS.map(({ id, href, icon: Icon, label }) => (
							<a
								key={id}
								href={href}
								aria-label={label}
								target="_blank"
								className="text-slate-400 hover:text-white transition-colors">
								<Icon className="w-6 h-6" />
							</a>
						))}
					</div>
					<p className="text-slate-500 text-sm">
						© {new Date().getFullYear()} Shedrack Okunda. All Right
						Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
