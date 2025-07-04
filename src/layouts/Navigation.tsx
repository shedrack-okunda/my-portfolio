import React from "react";

export const Navigation = () => {
	const [currentSection, setCurrentSection] = React.useState("hero");
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const scrollToSection = (sectionId: string) => {
		setCurrentSection(sectionId);
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	return (
		<>
			<nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
				<div className="container mx-auto px-6 py-3">
					<div className="flex items-center justify-between">
						<div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
							Sheddy
						</div>

						{/* Desktop Menu */}
						<div className="hidden md:flex items-center space-x-8">
							{[
								"home",
								"about",
								"services",
								"projects",
								"contact",
							].map((item) => (
								<button
									key={item}
									onClick={() => scrollToSection(item)}
									className={`capitalize hover:text-blue-400 transition-colors duration-200 ${
										currentSection === item
											? "text-blue-400"
											: "hover:text-blue-400"
									}`}>
									{item}
								</button>
							))}
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="md:hidden p-2">
							<div className="w-6 h-6 flex flex-col justify-center space-y-1">
								<div
									className={`w-full h-0.5 bg-white transition-all duration-300 ${
										isMenuOpen
											? "rotate-45 translate-y-2"
											: ""
									}`}></div>
								<div
									className={`w-full h-0.5 bg-white transition-all duration-300 ${
										isMenuOpen ? "opacity-0" : ""
									}`}></div>
								<div
									className={`w-full h-0.5 bg-white transition-all duration-300 ${
										isMenuOpen
											? "-rotate-45 -translate-y-2"
											: ""
									}`}></div>
							</div>
						</button>
					</div>

					{/* Mobile Menu */}
					{isMenuOpen && (
						<div className="md:hidden mt-4 py-4 border-t border-slate-800">
							{[
								"home",
								"about",
								"services",
								"projects",
								"contact",
							].map((item) => (
								<button
									key={item}
									onClick={() => scrollToSection(item)}
									className={`block w-full text-left py-2 capitalize hover:text-blue-400 transition-colors duration-200 ${
										currentSection === item
											? "text-blue-400"
											: "hover:text-blue-400"
									}`}>
									{item}
								</button>
							))}
						</div>
					)}
				</div>
			</nav>
		</>
	);
};
