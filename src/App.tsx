import type React from "react";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Layout from "./layouts/Layout";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Hero />} />
				<Route path="/about" element={<About />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Layout>
	);
};

export default App;
