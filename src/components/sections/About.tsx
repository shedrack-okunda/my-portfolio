import { Car, Code, Heart, Mountain, Music } from "lucide-react";
import type React from "react";

const About: React.FC = () => {
	const passions = [
		{
			icon: <Code className="w-6 h-6" />,
			title: "Full-Stack Development",
			description:
				"Crafting scalable web applications with modern technologies",
		},
		{
			icon: <Car className="w-6 h-6" />,
			title: "Driving Adventures",
			description:
				"Exploring new horizons and finding inspiration on the road",
		},
		{
			icon: <Music className="w-6 h-6" />,
			title: "Drumming",
			description: "Finding rhythm and creativity through percussion",
		},
		{
			icon: <Mountain className="w-6 h-6" />,
			title: "Linux Enthusiast",
			description:
				"Embracing open-source philosophy and system optimization",
		},
		{
			icon: <Heart className="w-6 h-6" />,
			title: "Kingdom Minded",
			description: "Living with purpose and spiritual conviction",
		},
	];

	return (
		<>
			<section id="about" className="py-20 bg-slate-900/50">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
							About Me
						</h2>
						<p className="text-xl text-slate-300 max-w-3xl mx-auto">
							A passionate full-stack developer with a heart for
							creating meaningful digital experiences that serve a
							greater purpose.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
								<div className="text-center">
									<Code className="w-24 h-24 mx-auto mb-4 text-blue-400" />
									<p className="text-slate-300">
										Developer at Heart
									</p>
								</div>
							</div>
						</div>

						<div className="space-y-6">
							<p className="text-lg text-slate-300 leading-relaxed">
								I'm a dedicated full-stack developer
								specializing in the MERN stack, with a passion
								for building applications that not only function
								beautifully but also serve a meaningful purpose.
								My journey in development is driven by
								excellence, creativity, and a kingdom-minded
								approach to technology.
							</p>

							<p className="text-lg text-slate-300 leading-relaxed">
								When I'm not coding, you'll find me behind a
								drum set finding rhythm and inspiration,
								exploring new roads while driving, or diving
								deep into Linux systems. I believe that
								technology can beautifully intersect in our day
								to day life and create something greater.
							</p>

							<div className="grid grid-cols-2 gap-4 mt-8">
								{passions.map((passion, index) => (
									<div
										key={index}
										className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg">
										<div className="text-blue-400">
											{passion.icon}
										</div>
										<div>
											<h4 className="font-semibold text-sm">
												{passion.title}
											</h4>
											<p className="text-xs text-slate-400">
												{passion.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
