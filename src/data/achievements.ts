
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
    title: "Winner - HACKHAZARDS 2025 (Fluvio Track)",
    type: "competition",
    year: "2025",
    description: "Secured first place in the International Hackthon. Integrated SmartWaste platform with Fluvio; improving handling by 60%",
    icon: Trophy,
  },
  {
    id: 2,
    title: "Runner up - Devthon 2025",
    type: "competition", 
    year: "2025",
    description: "Won second place for developing an AI waste management system (YOLO); boosted efficiency 30%.",
    icon: Trophy,
  },
  {
    id: 3,
    title: "Winner - Esperanza 2024",
    type: "competition",
    year: "2024",
    description: "Led CivicConnect civic platform; improved resolution and engagement by 60%.",
    icon: Star,
  },
    {
    id: 4,
    title: "Academic Excellence Award - Class 12 Boards",
    type: "academic",
    year: "2022",
    description: "Scored 95% in Class 12 boards; top 5% nationwide.",
    icon: Star,
  },

  {
    id: 5,
    title: "Python Certification",
    type: "certification",
    year: "2023",
    description: "Completed comprehensive Python programming certification.",
    icon: Award,
  },
  {
    id: 6,
    title: "SQL Certification",
    type: "certification",
    year: "2022",
    description: "Earned certification in SQL database management and querying.",
    icon: Award,
  },
  {
    id: 7,
    title: " MERN Stack Application Development",
    type: "certification",
    year: "2025",
    description: "Completed specialized training in AI prompt engineering techniques.",
    icon: Award,
  },
];
