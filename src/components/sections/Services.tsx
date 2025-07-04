import { services } from "../services";

export const Services = () => {
	return (
		<section id="services" className="py-20">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
						Services
					</h2>
					<p className="text-xl text-slate-300 max-w-3xl mx-auto">
						Comprehensive web development services tailored to bring
						your vision to life with modern technologies and best
						practices.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service) => (
						<div key={service.id} className="group">
							<div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
								<div className="text-blue-400 mb-6 group-hover:text-blue-300 transition-colors duration-200">
									{service.icon}
								</div>

								<h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-200">
									{service.title}
								</h3>

								<p className="text-slate-300 mb-6 leading-relaxed">
									{service.description}
								</p>

								<ul className="space-y-2">
									{service.features.map((feature, index) => (
										<li
											key={index}
											className="flex items-center text-sm text-slate-400">
											<div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
											{feature}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
