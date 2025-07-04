import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
	return (
		<>
			<section id="contact" className="py-20">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
							Let's Connect
						</h2>
						<p className="text-xl text-slate-300 max-w-3xl mx-auto">
							Ready to bring your ideas to life? Let's discuss how
							we can work together to create something
							extraordinary.
						</p>
					</div>

					<div className="max-w-4xl mx-auto">
						<div className="grid md:grid-cols-2 gap-12">
							<div className="space-y-8">
								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
										<Mail className="w-6 h-6 text-blue-400" />
									</div>
									<div>
										<h3 className="font-semibold">Email</h3>
										<p className="text-slate-400">
											okundashedrack@gmail.com
										</p>
									</div>
								</div>

								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
										<Phone className="w-6 h-6 text-blue-400" />
									</div>
									<div>
										<h3 className="font-semibold">Phone</h3>
										<p className="text-slate-400">
											+254 720 260 412
										</p>
									</div>
								</div>

								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
										<MapPin className="w-6 h-6 text-blue-400" />
									</div>
									<div>
										<h3 className="font-semibold">
											Location
										</h3>
										<p className="text-slate-400">
											Available for remote work
										</p>
									</div>
								</div>
							</div>

							<div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
								<form className="space-y-6">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium mb-2">
											Name
										</label>
										<input
											type="text"
											id="name"
											className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
											placeholder="Your Name"
										/>
									</div>

									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium mb-2">
											Email
										</label>
										<input
											type="email"
											id="email"
											className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
											placeholder="your.email@example.com"
										/>
									</div>

									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium mb-2">
											Message
										</label>
										<textarea
											id="message"
											rows={4}
											className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
											placeholder="Tell me about your project..."></textarea>
									</div>

									<button
										type="submit"
										className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
										Send Message
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
