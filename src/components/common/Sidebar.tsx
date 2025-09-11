import { NAV_LINKS } from "../../config/navigation";

const Sidebar = () => {
	return (
		<nav className="fixed flex flex-col items-center py-16 space-y-6">
			{NAV_LINKS.map(({ id, icon: Icon, label }) => (
				<button
					key={id}
					onClick={() =>
						document
							.getElementById(id)
							?.scrollIntoView({ behavior: "smooth" })
					}
					aria-label={label}
					className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
					<Icon className="w-6 h-6" />
				</button>
			))}
		</nav>
	);
};

export default Sidebar;
