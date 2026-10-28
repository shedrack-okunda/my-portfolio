import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />

			<div className="flex flex-1">
				<main
					className="flex-1 bg-slate-950 text-white"
					role="main"
					id="main-content"
				>
					{children}
				</main>
			</div>

			<Footer />
		</div>
	);
};

export default Layout;
