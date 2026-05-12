import {
	Briefcase,
	Home,
	Layers,
	Mail,
	User,
	type LucideIcon,
} from "lucide-react";

export interface NavLink {
	id: string;
	label: string;
	icon: LucideIcon;
}

export const NAV_LINKS: NavLink[] = [
	{ id: "home", label: "Home", icon: Home },
	{ id: "about", label: "About", icon: User },
	{ id: "skills", label: "Skills", icon: Briefcase },
	{ id: "projects", label: "Projects", icon: Layers },
	{ id: "contact", label: "Contact", icon: Mail },
];
