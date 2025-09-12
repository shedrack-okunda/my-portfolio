import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Navbar */}
			<Navbar />

			<div className="flex flex-1">
				{/* Sidebar (desktop) */}
				<aside className="hidden md:flex w-16 border-r border-slate-800 bg-slate-950">
					<Sidebar />
				</aside>

				{/* Main content */}
				<main className="flex-1 bg-slate-950 text-white">
					{children}
				</main>
			</div>

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default Layout;
