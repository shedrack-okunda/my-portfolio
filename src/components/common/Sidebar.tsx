import { NAV_LINKS } from "../../config/navigation";

const Sidebar = () => {
	return (
		<nav
			className="fixed flex flex-col items-center py-16 space-y-6"
			role="navigation"
			aria-label="Sidebar Navigation">
			{NAV_LINKS.map(({ id, icon: Icon, label }) => (
				<a
					key={id}
					href={`#${id}`}
					className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
					aria-label={label}>
					<Icon className="w-6 h-6" aria-hidden="true" />
				</a>
			))}
		</nav>
	);
};

export default Sidebar;
