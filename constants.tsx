
import { Publication, Project, NewsItem, Certification, Book, EducationEntry, ExperienceEntry, Course } from './types';

export const COURSES: Course[] = [
  {
    id: "nano-tech-energy",
    title: "Nano Technology Uniqueness in Energy Science",
    platform: "YouTube Playlist",
    description: "A comprehensive video series exploring the revolutionary impact of nanotechnology in energy science, covering the nanoscale revolution and the secrets of nanotech applications.",
    thumbnail: "/assets/misc/hero_bg.jpg", // Fallback or reuse
    link: "https://youtube.com/playlist?list=PLDDjuyaoyJown7ROxEiGSUbeDWfzoqmkQ&si=rMrmV1qofCn8XW-k",
    topics: ["The Nanoscale Revolution", "Nanotech Billionth Meter", "Secrets of Nanotechnology", "Energy Applications"],
    playlistId: "PLDDjuyaoyJown7ROxEiGSUbeDWfzoqmkQ"
  }
];


export const COLORS = {
  primary: '#004d40',
  primaryHover: '#003d33',
  bgLight: '#f9fbfb',
  footerBg: '#122620',
  accent: '#10b981'
};

export const EDUCATION: EducationEntry[] = [
  {
    institution: "King Fahd University of Petroleum & Minerals (KFUPM)",
    degree: "Doctor of Philosophy - PhD, Chemical Engineering",
    duration: "Jan 2026 - Present",
    logo: "/assets/logos/kfupm.png",
    skills: ["Advanced Chemical Engineering", "Research", "Process Simulation"]
  },
  {
    institution: "Technion - Israel Institute of Technology",
    degree: "Specialisation, Nanotechnology",
    duration: "Jan 2020 - Aug 2020",
    grade: "80%",
    logo: "/assets/logos/technion.svg",
    skills: ["Nanotechnology", "Nanomaterials", "Nanocomposites", "Nanoparticles"]
  },
  {
    institution: "UC Irvine",
    degree: "Specialization, Project Management Principles and Practices",
    duration: "Feb 2019 - Jul 2020",
    logo: "/assets/logos/uci.png",
    skills: ["Project Management", "Risk Management", "Budgeting", "Team Management"]
  },
  {
    institution: "The Johns Hopkins University",
    degree: "Specialisation, Chemical and Health",
    duration: "Jan 2019 - Jul 2020",
    grade: "84%",
    logo: "/assets/logos/jhu.png",
    skills: ["Chemical Safety", "Public Health", "Occupational Health"]
  },
  {
    institution: "Anna University Chennai",
    degree: "Bachelor of Technology - BTech, Chemical Engineering",
    duration: "Aug 2019 - May 2023",
    grade: "7.92 CGPA",
    logo: "/assets/logos/anna_univ.png",
    skills: ["Process Design", "Industrial Safety", "Aspen Plus", "Chemical Process Engineering"]
  },
  {
    institution: "Hindusthan College of Engineering and Technology",
    degree: "Specialization, Lab Analyst - Rubber",
    duration: "Aug 2022 - Apr 2023",
    grade: "A",
    logo: "/assets/logos/hicet.png",
    skills: ["Laboratory Skills", "Workplace Safety", "Process Design"]
  }
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Graduate Research And Teaching Assistant",
    company: "King Fahd University of Petroleum & Minerals - KFUPM",
    duration: "Jan 2026 - Present",
    location: "Dhahran, Saudi Arabia",
    description: "Engaging in advanced chemical engineering research and assisting in teaching undergraduates.",
    skills: ["Academic Instruction", "Advanced Research", "Laboratory Management"]
  },
  {
    role: "Project Associate and Research Assistant",
    company: "Centre for Sustainable Technologies, IISc",
    duration: "Aug 2024 - Dec 2025",
    location: "Bengaluru, India",
    description: "Researching industrial wastewater treatment and sustainable technologies.",
    skills: ["Sustainable Technology", "Wastewater Treatment", "Analytical Chemistry"]
  },
  {
    role: "Research Assistant",
    company: "Hindusthan College of Engineering and Technology",
    duration: "Jun 2023 - Feb 2024",
    location: "Coimbatore, India",
    description: "Led research initiatives focusing on resource recovery and process safety.",
    skills: ["Process Safety", "Metal Recovery", "Experimental Design"]
  },
  {
    role: "Intern",
    company: "Tamilnadu Petroproducts Ltd.",
    duration: "Aug 2022 - Aug 2022",
    location: "Chennai, India",
    description: "Industrial internship focused on petrochemical processing and safety.",
    skills: ["Process Safety", "Industrial Internship", "Petrochemicals"]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Neodymium Recovery from Permanent Magnets: A Breakthrough Approach Using Deep Eutectic Solvents (Salicylic acid and Choline chloride) and Mica as Adsorbent",
    authors: "Abel T. Varghese, Carlin Geor Malar, Muthulingam Seenuvasan, V. Jayapradha",
    journal: "Journal of Molecular Liquids, Volume 394",
    year: "2024",
    link: "https://doi.org/10.1016/j.molliq.2023.123690",
    doi: "10.1016/j.molliq.2023.123690"
  },
  {
    title: "Enhancing green recovery of Nd and Fe using TGA–ChCl DES and vermiculite: sustainable leaching of NdFeB magnets with deep eutectic solvents (DES)",
    authors: "Abel T. Varghese, Anjana Das",
    journal: "Discover Chemistry, Volume 2",
    year: "2025",
    link: "https://doi.org/10.1007/s44371-025-00429-z",
    doi: "10.1007/s44371-025-00429-z"
  },
  {
    title: "Reviving Lithium: A Sustainable Approach to Recover Lithium Metal from Spent Lithium-Ion Batteries Using Deep Eutectic Solvents",
    authors: "V. Jayapradha, Carlin Geor Malar, Muthulingam Seenuvasan, Abel T. Varghese",
    journal: "Canadian Journal of Chemistry",
    year: "2025",
    link: "#",
  }
];

export const BOOKS: Book[] = [
  {
    title: "Me Before You The World",
    author: "Abel Varghese",
    link: "https://www.amazon.in/dp/B0G1ZH65P1",
    // Representing the specific uploaded cover image: romantic scenery with two people behind a window
    coverImage: "/assets/misc/book_cover.png",
    description: "An evocative exploration of personal journey and global perspective, capturing the essence of human connection across borders."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "nd-recovery-mica",
    title: "Neodymium Recovery using Mica Adsorbent",
    duration: "June 2020 – April 2023",
    description: [
      "Innovation: Developed an eco-friendly method using Salicylic acid & Choline chloride DES.",
      "Efficiency: Achieved 97% maximum leaching effectiveness for Neodymium.",
      "Modeling: Employed Artificial Neural Networks (ANNs) for predictive modeling.",
      "Impact: Published in Journal of Molecular Liquids (Vol 394)."
    ],
    image: "/assets/projects/neodymium.png",
    tags: ["Data Analysis", "Sustainable Chemistry", "ANN Modeling"]
  },
  {
    id: "li-recovery",
    title: "Lithium Recovery from Spent Batteries",
    duration: "Research Project",
    description: [
      "Process: Developed a novel DES system using cattle urea for Lithium extraction.",
      "Efficiency: Achieved 91.2% lithium leaching efficiency and 92% recovery via adsorption.",
      "Characterization: Utilized FTIR, XRD, SEM, NMR, and ICP-MS for detailed analysis.",
      "Focus: Sustainable waste management and circular economy for Li-ion batteries."
    ],
    image: "/assets/projects/lithium.png",
    tags: ["Circular Economy", "Analytical Chemistry", "Battery Recycling"]
  }
];

export const NEWS: NewsItem[] = [
  {
    id: "news-1",
    title: "Commenced Ph.D. at KFUPM",
    date: "01/01/2026",
    summary: "Excited to begin my doctoral studies in Chemical Engineering at King Fahd University of Petroleum & Minerals."
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Project Management Principles and Practices", issuer: "University of California, Irvine", date: "July 2020" },
  { name: "Chemicals and Health", issuer: "Johns Hopkins University", date: "July 2020" },
  { name: "Nanotechnology and Nanosensors", issuer: "Israel Institute of Technology", date: "May 2021" }
];
