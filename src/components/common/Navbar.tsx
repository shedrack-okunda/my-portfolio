import React, { useEffect, useState } from "react";
import { NAV_LINKS } from "../../config/navigation";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
	const [currentSection, setCurrentSection] = useState("hero");
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);

	// Detect visible section
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setCurrentSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.4, rootMargin: "-50px 0px -50px 0px" },
		);

		NAV_LINKS.forEach(({ id }) => {
			const section = document.getElementById(id);
			if (section) observer.observe(section);
		});

		return () => observer.disconnect();
	}, []);

	// Scroll progress bar
	useEffect(() => {
		const updateProgress = () => {
			const scrollTop = window.scrollY;
			const docHeight = document.body.scrollHeight - window.innerHeight;
			setScrollProgress((scrollTop / docHeight) * 100);
		};

		window.addEventListener("scroll", updateProgress);
		return () => window.removeEventListener("scroll", updateProgress);
	}, []);

	return (
		<nav
			className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800"
			role="navigation"
			aria-label="Main Navigation"
		>
			<div className="container mx-auto px-2 py-2 flex items-center justify-between">
				{/* Brand */}
				<Link
					to="/"
					className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
				>
					Sheddy
				</Link>

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center space-x-8">
					{NAV_LINKS.map(({ path, label }) => (
						<Link
							key={label}
							to={path}
							className={`flex capitalize text-center font-semibold transition-colors duration-200 ${
								currentSection === path
									? "text-blue-400"
									: "text-white hover:text-blue-400"
							}`}
							aria-current={currentSection === path ? "page" : undefined}
						>
							{label}
						</Link>
					))}
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="md:hidden p-2"
					aria-expanded={isMenuOpen}
					aria-controls="mobile-menu"
					aria-label="Toggle menu"
				>
					{isMenuOpen ? (
						<X className="w-6 h-6 text-white" aria-hidden="true" />
					) : (
						<Menu className="w-6 h-6 text-white" aria-hidden="true" />
					)}
				</button>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div
					id="mobile-menu"
					className="md:hidden mt-4 py-4 border-t border-t-purple-400 border-slate-800"
				>
					{NAV_LINKS.map(({ path, label }) => (
						<Link
							key={label}
							to={path}
							onClick={() => setIsMenuOpen(false)}
							className={`block w-full font-medium text-left py-2 capitalize transition-colors duration-200 ${
								currentSection === path
									? "text-blue-400"
									: "text-white hover:text-blue-400"
							}`}
							aria-current={currentSection === path ? "page" : undefined}
						>
							{label}
						</Link>
					))}
				</div>
			)}

			{/* Scroll Progress Bar */}
			<div
				className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-200 rounded"
				style={{ width: `${scrollProgress}%` }}
				aria-hidden="true"
			></div>
		</nav>
	);
};

export default Navbar;
