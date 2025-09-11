import { Github, Linkedin, Mail } from "lucide-react";

export interface SocialLink {
	id: string;
	href: string;
	icon: React.ComponentType<{ className?: string }>;
	label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
	{
		id: "github",
		href: "https://github.com/shedrack-okunda",
		icon: Github,
		label: "GitHub",
	},
	{
		id: "linkedin",
		href: "https://linkedin.com/in/shedrack-okunda",
		icon: Linkedin,
		label: "LinkedIn",
	},
	{
		id: "email",
		href: "mailto:okundashedrack@gmail.com",
		icon: Mail,
		label: "Email",
	},
];
