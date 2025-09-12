import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "../../config/socials";

const Hero: React.FC = () => {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center relative overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

			{/* Content */}
			<div className="container mx-auto px-6 mt-5 py-5 relative z-10">
				<div className="text-center max-w-4xl mx-auto">
					{/* Avatar */}
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }}
						className="mb-8">
						<div className="w-32 h-32 mx-auto mt-6 mb-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
							<div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
								<img
									src="/images/sheddy.webp"
									alt="Portrait of Shedrack Okunda"
									loading="lazy"
									width={128}
									height={128}
									className="rounded-full"
								/>
							</div>
						</div>
					</motion.div>

					{/* Name */}
					<motion.h1
						initial={{ y: 40, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="text-4xl md:text-6xl font-bold mb-5">
						<span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
							Shedrack Okunda
						</span>
					</motion.h1>

					{/* Title */}
					<motion.h2
						initial={{ y: 40, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						viewport={{ once: true }}
						className="text-2xl mb-1 font-semibold text-slate-200">
						Full-Stack Developer
						<br />• MERN | TypeScript | Tailwind
					</motion.h2>

					{/* Description */}
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.7 }}
						viewport={{ once: true }}
						className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
						Passionate MERN stack developer crafting digital
						experiences with purpose and excellence.
						<br />•{" "}
						<span className="text-purple-400">
							Linux enthusiast
						</span>
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.9 }}
						className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
						<a
							href="#projects"
							className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
							View My Work
						</a>
						<a
							href="#contact"
							className="px-8 py-3 border border-slate-700 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-200">
							Get In Touch
						</a>
					</motion.div>

					{/* Social Links */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 1.1 }}
						className="flex justify-center space-x-6">
						{SOCIAL_LINKS.map(({ id, href, icon: Icon, label }) => (
							<a
								key={id}
								href={href}
								aria-label={label}
								target="_blank"
								rel="noopener noreferrer"
								className="text-slate-400 hover:text-white transition-colors">
								<Icon className="w-6 h-6" />
							</a>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
