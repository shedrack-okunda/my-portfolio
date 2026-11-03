export interface NavLink {
	path: string;
	label: string;
}

export const NAV_LINKS: NavLink[] = [
	{ path: "/", label: "Home" },
	{ path: "/about", label: "About" },
	{ path: "/skills", label: "Skills" },
	{ path: "/projects", label: "Projects" },
	{ path: "/contact", label: "Contact" },
];
