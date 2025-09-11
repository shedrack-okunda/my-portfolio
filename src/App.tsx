import type React from "react";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Layout from "./components/layouts/Layout";
import { useEffect, useState } from "react";
import Loader from "./components/common/Loader";

const App: React.FC = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 1200);
		return () => clearTimeout(timer);
	}, []);

	if (loading) return <Loader />;

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
