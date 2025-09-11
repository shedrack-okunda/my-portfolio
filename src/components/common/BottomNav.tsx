import { NAV_LINKS } from "../../config/navigation";
import { useState } from "react";

const BottomNav = () => {
	const [active, setActive] = useState("home");

	const handleClick = (id: string) => {
		setActive(id);
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<nav className="fixed bottom-0 left-0 bg-slate-950 right-0 flex  rounded justify-around py-2">
			{NAV_LINKS.map(({ id, icon: Icon }) => (
				<button
					key={id}
					onClick={() => handleClick(id)}
					className={`flex flex-col items-center text-xs ${
						active === id ? "text-blue-400" : "text-slate-400"
					}`}>
					<Icon className="w-6 h-6 mb-1" />
				</button>
			))}
		</nav>
	);
};

export default BottomNav;
