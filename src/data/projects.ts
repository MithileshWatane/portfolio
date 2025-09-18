
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "SmartWaste (2x Hackathons Winning )",
    description: "Built an AI-powered waste detection system using YOLO & OpenCV with 95% real-time accuracy and an RL-based task allocation algorithm, reducing response time by 40% through creative problem-solving– Designed an interactive public reporting platform with gamified rewards, boosting citizen participation by 70% and tripling resolution speed.",
    image: "/imgs/p1.png",
    tags: ["YOLOv8","Python", "OpenCV", "MERN Stack" , "Reinforcement Learning"],
    links: {
      github: "https://github.com/trioscoet26/SmartWaste",
      live: "https://smart-waste-virid.vercel.app/",
    },
  },
    {
    id: 2,
    title: "CivicConnect (2x Hackathons Winning )",
    description: "Engineered a scalable full-stack platform for civic issue reporting (complaints, tracking, analytics), enabling 40% faster resolution and 10,500 + monthly interactions.",
    image: "/imgs/p2.png",
    tags: ["React", "Node.js", "Express", "MongoDB" , "Socket.io"],
    links: {
      github: "https://github.com/MithileshWatane/civicdeploy",
      live: "https://civicdeploy.vercel.app/",
    },
  },
    {
    id: 3,
    title: "EcoAdviser",
    description: "EcoAdviser is an AI-powered platform that classifies waste materials and recommends the most sustainable end-of-life strategy—reuse, recycle, upcycle, or dispose—while optimizing costs and reducing carbon footprint.",
    image: "/imgs/p3.png",
    tags: ["Python", "Streamlit", "TensorFlow", "MySQL"],
    links: {
      github: "https://github.com/MithileshWatane/EcoAdviser",
      live: ""
    },
  },
  // {
  //   id: 1,
  //   title: "Py Scrap - Amazon Web Scraper",
  //   description: "A Python-based scraper using Scrapy to extract product details from Amazon, with MongoDB integration for data storage.",
  //   image: "/imgs/p4.png",
  //   tags: ["Python", "Scrapy", "MongoDB", "Data Mining"],
  //   links: {
  //     github: "https://github.com/MithileshWatane/Py-Scrap",
  //     live: "",
  //   },
  // },
  // {
  //   id: 2,
  //   title: "MSR Tailor Store",
  //   description: "A full-stack application with React and Node.js for order placement and checkout functionality for a tailor store.",
  //   image: "/imgs/p1.png",
  //   tags: ["React", "Node.js", "Express", "MongoDB"],
  //   links: {
  //     github: "https://github.com/MithileshWatane/MSR-ITP",
  //     live: "",
  //   },
  // },
  // {
  //   id: 3,
  //   title: "Internship Finder - ProIntern",
  //   description: "A React Native and Firebase app for managing internships and applications, helping students find relevant opportunities.",
  //   image: "/imgs/p2.png",
  //   tags: ["React Native", "Firebase", "Authentication", "Cloud Functions"],
  //   links: {
  //     github: "https://github.com/MithileshWatane/ProIntern",
  //     live: ""
  //   },
  // },
  {
    id: 4,
    title: "Minders",
    description: "A creative community platform built with React and Tailwind CSS, fostering collaboration among creative professionals.",
    image: "/imgs/p4.png",
    tags: ["React", "Tailwind CSS", "Redux", "Firebase"],
    links: {
      github: "https://github.com/MithileshWatane/Minders",
      live: "https://minders-sigma.vercel.app/",
    },
  },
];
