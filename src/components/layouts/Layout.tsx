import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Navbar */}
			<Navbar />

			<div className="flex flex-1">
				{/* Main content */}
				<main
					className="flex-1 bg-slate-950 text-white"
					role="main"
					id="main-content">
					{children}
				</main>
			</div>

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default Layout;
