import type React from "react";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Layout from "./components/layouts/Layout";

const App: React.FC = () => {
	return (
		<Layout>
			<Hero />
			<About />
			<Services />
			<Projects />
			<Contact />
		</Layout>
	);
};

export default App;
