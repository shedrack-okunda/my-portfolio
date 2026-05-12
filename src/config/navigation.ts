export interface NavLink {
	id: string;
	label: string;
}

export const NAV_LINKS: NavLink[] = [
	{ id: "home", label: "Home" },
	{ id: "about", label: "About" },
	{ id: "skills", label: "Skills" },
	{ id: "projects", label: "Projects" },
	{ id: "contact", label: "Contact" },
];
