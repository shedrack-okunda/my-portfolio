import {
	Cpu,
	FolderKanban,
	Home,
	Mail,
	User,
	type LucideIcon,
} from "lucide-react";

export interface NavLink {
	path: string;
	label: string;
	icon: LucideIcon;
}

export const NAV_LINKS: NavLink[] = [
	{ path: "/", label: "Home", icon: Home },
	{ path: "/about", label: "About", icon: User },
	{ path: "/skills", label: "Skills", icon: Cpu },
	{ path: "/projects", label: "Projects", icon: FolderKanban },
	{ path: "/contact", label: "Contact", icon: Mail },
];
