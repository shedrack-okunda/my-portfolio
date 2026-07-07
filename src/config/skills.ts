import {
  Database,
  Globe,
  Palette,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Frontend Engineering",
    description:
      "Building responsive and interactive user interfaces focused on performance, accessibility, and user experience.",
    icon: Palette,
    features: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
    ],
  },

  {
    id: "2",
    title: "Backend Development",
    description:
      "Developing scalable server-side applications, REST APIs, authentication systems, and database integrations.",
    icon: Database,
    features: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Authentication",
    ],
  },

  // {
  // 	id: "3",
  // 	title: "Mobile Development",
  // 	description:
  // 		"Building cross-platform mobile applications with modern React Native tooling and responsive mobile-first design.",
  // 	icon: Smartphone,
  // 	features: [
  // 		"React Native",
  // 		"Expo",
  // 		"Mobile UI",
  // 		"Navigation",
  // 		"API Integration",
  // 	],
  // },

  {
    id: "4",
    title: "Tools & Workflow",
    description:
      "Using modern development tools and workflows for collaboration, version control, deployment, and productivity.",
    icon: Globe,
    features: ["Git & GitHub", "Docker", "Figma", "Postman", "CI/CD"],
  },
];
