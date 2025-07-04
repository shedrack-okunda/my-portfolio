import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
	return (
		<>
			<footer className="py-12 bg-slate-900 border-t border-slate-800">
				<div className="container mx-auto px-6">
					<div className="text-center">
						<div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
							Shedrack Okunda
						</div>
						<p className="text-slate-400 mb-6">
							Crafting digital experiences with passion and
							purpose.
						</p>
						<div className="flex justify-center space-x-6 mb-6">
							<a
								href="https://github.com/shedrack-okunda"
								className="text-slate-400 hover:text-white transition-colors duration-200">
								<Github className="w-6 h-6" />
							</a>
							<a
								href="https://linkedin.com/in/shedrack-okunda"
								className="text-slate-400 hover:text-white transition-colors duration-200">
								<Linkedin className="w-6 h-6" />
							</a>
							<a
								href="mailto:okundashedrack@gmail.com"
								className="text-slate-400 hover:text-white transition-colors duration-200">
								<Mail className="w-6 h-6" />
							</a>
						</div>
						<p className="text-slate-500 text-sm">
							© 2025 Shedrack Okunda. Built with React,
							TypeScript, and Tailwind CSS.
						</p>
					</div>
				</div>
			</footer>
		</>
	);
};
