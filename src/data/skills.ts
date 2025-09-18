
import { Code, Database, Layout, Terminal, Cpu, Palette } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Terminal,
    skills: ["Java" , "Python", "JavaScript",  "TypeScript", "HTML & CSS"],
  },
  {
    name: "Frontend Development",
    icon: Layout,
    skills: ["React", "React Native", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend Development",
    icon: Code,
    skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Firebase", "PostgreSQL" , "Redis"],
  },
  {
    name: "Tools & Technologies",
    icon: Cpu,
    skills: ["Git", "Agile/Scrum" , "Docker" , "Kafka" ,"AWS" , "VS Code" ],
  },
  {
    name: "Design",
    icon: Palette,
    skills: ["Figma", "Adobe AI", "UI/UX Design", "Wireframing", "Prototyping"],
  },
];
