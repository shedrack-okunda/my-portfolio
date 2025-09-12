import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";

export interface PersonalInfo {
	id: string;
	title: string;
	detail: string;
	icon: LucideIcon;
}

export const PERSONAL_INFO: PersonalInfo[] = [
	{
		id: "1",
		icon: Mail,
		title: "Email",
		detail: "okundashedrack@gmail.com",
	},
	{
		id: "2",
		icon: Phone,
		title: "Phone",
		detail: "+254 720 260 412",
	},
	{
		id: "3",
		icon: MapPin,
		title: "Nairobi, Kenya",
		detail: "Available for remote work",
	},
];
