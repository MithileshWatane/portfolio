
import { Trophy, Star, Award } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  id: number;
  title: string;
  type: "competition" | "academic" | "certification";
  year: string;
  description: string;
  icon: LucideIcon;
};

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "2nd Place - Algothon Codefest",
    type: "competition",
    year: "2024",
    description: "Secured second place in the competitive programming event.",
    icon: Trophy,
  },
  {
    id: 2,
    title: "3rd Place - INTELLECT 1.0 Hackathon",
    type: "competition", 
    year: "2024",
    description: "Won third place for developing an innovative solution during the 24-hour hackathon.",
    icon: Trophy,
  },
  {
    id: 3,
    title: "Dean's List",
    type: "academic",
    year: "2023",
    description: "Recognized for academic excellence with placement on the Dean's List.",
    icon: Star,
  },
  {
    id: 4,
    title: "Python Certification",
    type: "certification",
    year: "2023",
    description: "Completed comprehensive Python programming certification.",
    icon: Award,
  },
  {
    id: 5,
    title: "SQL Certification",
    type: "certification",
    year: "2022",
    description: "Earned certification in SQL database management and querying.",
    icon: Award,
  },
  {
    id: 6,
    title: "Prompt Engineering Certification",
    type: "certification",
    year: "2023",
    description: "Completed specialized training in AI prompt engineering techniques.",
    icon: Award,
  },
];
