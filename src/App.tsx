import type React from "react";
import Navigation from "./layouts/Navigation";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

const App: React.FC = () => {
	return (
		<div className="min-h-screen bg-slate-950 text-white">
			{/* Navigation */}
			<Navigation />

			{/* Hero Section */}
			<Hero />

			{/* About Section */}
			<About />

			{/* Services Section */}
			<Services />

			{/* Projects Section */}
			<Projects />

			{/* Contact Section */}
			<Contact />

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default App;
