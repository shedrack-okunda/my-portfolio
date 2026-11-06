import React from "react";
import { NAV_LINKS } from "../../config/navigation";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
	const location = useLocation();

	return (
		<>
			{/* Top Navbar (Desktop & Mobile Brand Bar) */}
			<nav
				className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800"
				role="navigation"
				aria-label="Main Navigation"
			>
				<div className="container mx-auto px-4 py-3 flex items-center justify-between">
					{/* Brand Section */}
					<Link
						to="/"
						className="flex items-center gap-2 font-mono text-xl font-bold group"
					>
						<span className="text-blue-400 group-hover:-translate-x-0.5 transition-transform">
							&lt;
						</span>
						<span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
							Shedrack
						</span>
						<span className="text-purple-400 group-hover:translate-x-0.5 transition-transform">
							/&gt;
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{NAV_LINKS.map(({ path, label, icon: Icon }) => {
							const isActive = location.pathname === path;
							return (
								<Link
									key={label}
									to={path}
									className={`flex items-center gap-2 font-semibold transition-colors duration-200 ${
										isActive
											? "text-blue-400"
											: "text-white hover:text-blue-400"
									}`}
								>
									<Icon className="w-4 h-4" />
									<span>{label}</span>
								</Link>
							);
						})}
					</div>
				</div>
			</nav>

			{/* Mobile Bottom Navigation Bar */}
			<nav
				className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-lg border-t border-slate-800 px-2 py-2"
				role="navigation"
				aria-label="Mobile Navigation"
			>
				<div className="flex items-center justify-around">
					{NAV_LINKS.map(({ path, label, icon: Icon }) => {
						const isActive = location.pathname === path;
						return (
							<Link
								key={label}
								to={path}
								className={`flex flex-col items-center justify-center gap-1 py-1 px-2 text-xs font-medium transition-colors duration-200 ${
									isActive ? "text-blue-400" : "text-slate-400 hover:text-white"
								}`}
								aria-current={isActive ? "page" : undefined}
							>
								<Icon
									className={`w-5 h-5 ${isActive ? "text-blue-400" : "text-slate-400"}`}
								/>
								<span>{label}</span>
							</Link>
						);
					})}
				</div>
			</nav>
		</>
	);
};

export default Navbar;
