"use client";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  DivideSquare,
  Braces,
} from "lucide-react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
// Framer Motion for animations below
import { hover, motion, useInView, AnimatePresence } from 'framer-motion';
import { faBasketball, faCamera, faGuitar, faLeaf, faCode, faTableTennisPaddleBall, faMountainSun } from '@fortawesome/free-solid-svg-icons';
import { FaPython, FaJsSquare, FaJava, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaFigma, FaSwift, FaHtml5, FaCss3, FaAngular } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiDjango, SiCplusplus, SiR, SiC, SiXcode, SiKubernetes, SiVim, SiPostgresql, SiMysql, SiPandas, SiNumpy, SiScikitlearn, SiPytorch, SiSpringboot, SiJunit5 } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const basePath = "/personal-website2026";

// Home Screen animated icons ===================

function getRandomPositionAndColor(safeZone: { top: number; left: number; bottom: number; right: number }, iconSize = 48) {
  const colors = [
    '#b1dd53', // green
    '#7ec4cf', // blue
    '#f59e42', // orange
    '#a259ff', // purple
    '#34d399', // teal
    '#f43f5e', // red
    '#593bc6', // indigo
    '#FFD700', // yellow
  ];
  let top, left, attempts = 0;
  do {
    top = Math.random() * 80 + 5; // 5% to 85%
    left = Math.random() * 80 + 5; // 5% to 85%
    attempts++;
  } while (
    top > safeZone.top && top < safeZone.bottom &&
    left > safeZone.left && left < safeZone.right &&
    attempts < 20
  );
  const color = colors[Math.floor(Math.random() * colors.length)];
  return { top: `${top}%`, left: `${left}%`, color };
}

function RotatingWords({ words, color = 'white' }: { words: string[]; color?: string }) {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setPrevIndex(index);
        setIndex((prev) => (prev + 1) % words.length);
        setAnimating(false);
      }, 150); // animation duration
    }, 2000);
    return () => clearInterval(interval);
  }, [index, words.length]);

  return (
    // <span className="relative inline-block w-[7.5ch] h-[1.2em] align-middle">
    <span className="relative inline-block w-[7.5ch] h-[1.2em] align-middle overflow-visible" style={{ lineHeight: '1.2em' }}>
      <span
        className={`absolute left-0 top-0 w-full transition-all duration-400 ease-in-out ${animating ? '-translate-y-5 opacity-0' : 'translate-y-0 opacity-100'} font-bold`}
        key={prevIndex}
        style={{ willChange: 'transform, opacity', color }}
      >
        {words[prevIndex]}
      </span>
      <span
        className={`absolute left-0 top-0 w-full transition-all duration-25 ease-in-out ${animating ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'} font-bold`}
        key={index}
        style={{ willChange: 'transform, opacity', color }}
      >
        {words[index]}
      </span>
    </span>
  );
}


// ----FLOATING OBJECTS CODE PART----
// =================================================

function FloatingIcons() {
  // FontAwesome icons (fixed positions/colors)
  const floatingObjects = [
    { icon: faBasketball, color: '#F59E42', style: { top: '27%', left: '27%' } },
    { icon: faCamera, color: '#4B9CD3', style: { top: '30%', left: '70%' } },
    { icon: faGuitar, color: '#A259FF', style: { top: '56%', left: '28%' } },
    { icon: faLeaf, color: '#34D399', style: { top: '50%', left: '75%' } },
    { icon: faCode, color: '#F43F5E', style: { top: '75%', left: '40%' } },
    { icon: faTableTennisPaddleBall, color: '#FFD700', style: { top: '20%', left: '60%' } },
    { icon: faMountainSun, color: '#c8c8c8', style: { top: '22%', left: '40%' } },
  ];
  // Google font icons (fixed, strategic positions)
  const googleFloatingIcons = [
    { icon: 'sports_tennis', color: '#b1dd53', style: { bottom: '15%', left: '25%', transform: 'translateX(-50%)' } }, // above name
    { icon: 'golf_course', color: '#7ec4cf', style: { bottom: '20%', right: '28%' } }, // bottom right
    { icon: 'headphones', color: '#f9bbfd', style: { top: '12%', left: '50%' } }, // bottom left 
    { icon: 'music_note', color: '#a259ff', style: { bottom: '10%', left: '50%', transform: 'translateX(-50%)' } }, // bottom center
  ];

  // Floating hero photos (move slowly left to right, loop, underneath icons)
  const floatingPhotos = [
    // { src: "/hero-imgs/backgroundmountain.jpeg", size: 80, top: "26%", startX: '20vw', endX: '-10vw', duration: 40, delay: 0 },
    { src: `${basePath}/hero-imgs/ericgrad.JPG`, size: 60, top: "15%", startX: '55vw', endX: '-10vw', duration: 40, delay: 0 },
    { src: `${basePath}/hero-imgs/koi.JPG`, size: 60, top: "50%", startX: '70vw', endX: '100vw', duration: 40, delay: 0 },
    { src: `${basePath}/hero-imgs/ricowater.JPEG`, size: 70, top: "65%", startX: '30vw', endX: '-10vw', duration: 50, delay: 0 },
    { src: `${basePath}/hero-imgs/southerns.JPEG`, size: 65, top: "80%", startX: '40vw', endX: '100vw', duration: 40, delay: 0 },

    // Add more images as needed, but keep to 5-7 for performance
  ];

  return (
    <>
      {/* Floating hero photos (underneath all icons/objects) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {floatingPhotos.map((photo, i) => {
          // Determine direction: left-to-right or right-to-left
          const isLTR = parseFloat(photo.endX) > parseFloat(photo.startX);
          // Offset for wrap-around
          const offset = isLTR ? '-100vw' : '+100vw';
          // Helper to build offset x values
          const offsetX = (x: string) => `calc(${x} ${isLTR ? '-' : '+'} 100vw)`;
          return (
            <React.Fragment key={photo.src}>
              {/* Main image */}
              <motion.img
                src={photo.src}
                alt="Floating Hero"
                style={{
                  position: 'absolute',
                  top: photo.top,
                  left: 0,
                  width: photo.size,
                  height: photo.size,
                  borderRadius: 8,
                  objectFit: 'cover',
                  pointerEvents: 'none',
                }}
                initial={{ x: photo.startX }}
                animate={{ x: photo.endX }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: photo.duration,
                    ease: 'linear',
                    delay: photo.delay || 0,
                  },
                }}
              />
              {/* Offset image for seamless wrap */}
              <motion.img
                src={photo.src}
                alt="Floating Hero"
                style={{
                  position: 'absolute',
                  top: photo.top,
                  left: 0,
                  width: photo.size,
                  height: photo.size,
                  borderRadius: 8,
                  objectFit: 'cover',
                  pointerEvents: 'none',
                }}
                initial={{ x: offsetX(photo.startX) }}
                animate={{ x: offsetX(photo.endX) }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: photo.duration,
                    ease: 'linear',
                    delay: photo.delay || 0,
                  },
                }}
              />
            </React.Fragment>
          );
        })}
      </div>
      {/* Icons and other floating objects above photos */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
        {/* FontAwesome icons in fixed positions */}
        {floatingObjects.map((obj, i) => (
          <motion.div
            key={i}
            style={{ ...obj.style, position: 'absolute' }}
            animate={{
              y: [0, -8, 0, 8, 0],
              x: [0, 4, 0, -4, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 4,
              repeat: Infinity,
              repeatType: 'loop',
              delay: Math.random() * 2,
            }}
          >
            <FontAwesomeIcon icon={obj.icon} size="2x" color={obj.color} style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' }} />
          </motion.div>
        ))}
        {/* Google font icons in fixed, strategic positions */}
        {googleFloatingIcons.map((obj, i) => (
          <motion.div
            key={obj.icon}
            style={{ position: 'absolute', ...obj.style }}
            animate={{
              y: [0, -8, 0, 8, 0],
              x: [0, 4, 0, -4, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 4,
              repeat: Infinity,
              repeatType: 'loop',
              delay: Math.random() * 2,
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 40, color: obj.color, display: 'inline-block', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.10))' }}>
              {obj.icon}
            </span>
          </motion.div>
        ))}
      </div>
    </>
  );
}

// =================================================
// ----TECH STACK LANGUAGES PART----

export default function Home() {
  const ref1 = useRef(null);
  const inView1 = useInView(ref1, { once: false, amount: 0.9 });
  const ref2 = useRef(null);
  const inView2 = useInView(ref2, { once: false, amount: 0.9 });
  const ref3 = useRef(null);
  const inView3 = useInView(ref3, { once: false, amount: 0.95 });
  const ref4 = useRef(null);
  const inView4 = useInView(ref4, { once: false, amount: 0.9 });
  const nameRef = useRef(null);
  const nameInView = useInView(nameRef, { once: false, amount: 0.5 });
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { amount: 0, once: false });

  // Variants for text animation (sliding in from left, standard out)
  const textVariants = {
    hidden: { x: -100, opacity: 0, transition: { duration: 0.5 } },
    visible: { x: 0, opacity: 1, transition: { duration: 1.5 } },
  };

  // Variants for the 3rd paragraph (faster hidden transition)
  const textVariantsP3 = {
    hidden: { x: -100, opacity: 0, transition: { duration: 0.4 } },
    visible: { x: 0, opacity: 1, transition: { duration: 1.5 } },
  };

  // Variants for image animation (sliding in from right, faster out)
  const imageVariants = {
    hidden: { x: 100, opacity: 0, transition: { duration: 0.6 } },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2 } },
  };

  // Mock data for the portfolio
  const techStack = {
    languages: [
      { name: "Python", icon: <img src={`${basePath}/tech-stack-imgs/python.png`} alt="Python" style={{ width: '2rem', height: '2rem' }} /> },
      { name: "Java", icon: <img src={`${basePath}/tech-stack-imgs/java.png`} alt="Java" style={{ width: '2rem', height: '2rem' }} /> },
      { name: "JavaScript", icon: <FaJsSquare color='#F7DF1E' /> },
      { name: "TypeScript", icon: <SiTypescript color='#3178C6' /> },
      { name: "R", icon: <SiR color='#276DC3' /> },
      { name: "Swift", icon: <FaSwift color='#FF6B35' /> },
      { name: "HTML", icon: <FaHtml5 color='#E34F26' /> },
      { name: "CSS", icon: <FaCss3 color='#1572B6' /> },
      { name: "C", icon: <img src={`${basePath}/tech-stack-imgs/c.png`} alt="C" style={{ width: '2rem', height: '2rem' }} /> },
      { name: "PostgreSQL", icon: <SiPostgresql color='#336791' /> },
      { name: "MySQL", icon: <SiMysql color='#4479A1' /> },
    ],
    frameworks: [
    { name: "Angular", icon: <FaAngular color='#DD0031' /> },
    { name: "Spring Boot", icon: <SiSpringboot color='#6DB33F' /> },
      { name: "React", icon: <FaReact color='#61DAFB' /> },
      { name: "Next.js", icon: <SiNextdotjs color='#000000' /> },
      { name: "Node.js", icon: <FaNodeJs color='#339933' /> },
      { name: "TailwindCSS", icon: <SiTailwindcss color='#06B6D4' /> },
      { name: "SwiftUI", icon: <FaSwift color='#FF6B35' /> },
      { name: "Pandas", icon: <SiPandas color='#130654' /> },
      { name: "NumPy", icon: <SiNumpy color='#4DABCF' /> },
      { name: "scikit-learn", icon: <SiScikitlearn color='#F7931E' /> },
      { name: "PyTorch", icon: <SiPytorch color='#EE4C2C' /> },
      // { name: "Biopython", icon: <FaPython color='#306998' /> },
      { name: "Matplotlib", icon:  <img src={`${basePath}/tech-stack-imgs/Matplotlib.png`} alt="Matplotlib" style={{ width: '2rem', height: '2rem' }} /> },
      { name: "Seaborn", icon: <img src={`${basePath}/tech-stack-imgs/seaborn.png`} alt="Seaborn" style={{ width: '2rem', height: '2rem' }} /> },
      { name: "JUnit", icon: <SiJunit5 color='#25A162' /> },
      { name: "REST APIs", icon: <Braces color='#e85d04' /> },
    ],
    tools: [
      { name: "AWS Cloud", icon: <FaAws color='#FF9900' /> },
      { name: "Docker", icon: <FaDocker color='#2496ED' /> },
      { name: "Git", icon: <FaGitAlt color='#F05032' /> },
      { name: "GitHub Actions (CI/CD)", icon: <FontAwesomeIcon icon={faGithub} color='#181717' /> },
      { name: "Tableau", icon: <img src={`${basePath}/tech-stack-imgs/tableau2.png`} alt="Tableau" style={{ width: '2rem', height: '2rem' }} /> },
      { name: "Kubernetes", icon: <SiKubernetes color="#3970e4"/> },
      { name: "VS Code", icon: <VscVscode color='#007ACC' /> },
      { name: "Xcode", icon: <SiXcode color="5dafff"/> },
      { name: "Vim", icon: <SiVim color="green" /> },
      { name: "Figma", icon: <FaFigma color='#F24E1E' /> },
    ],
  };

  // =================================================
  // ==================INTERESTS==================


  const interests = [
    { name: "Photography", icon: `${basePath}/hobbies/cam-logo2.png`, link: "https://www.instagram.com/danielwangphotography/", type: "image", size: "w-12 h-12" },
    { name: "Guitar", icon: `${basePath}/hobbies/guitar.png`, type: "image", size: "w-10 h-10" },
    { name: "Tennis", icon: `${basePath}/hobbies/utrlogo.png`, link: "https://app.utrsports.net/search?sportTypes=tennis,pickleball&type=players&startDate=06/17/2025&utrMax=16&utrMin=1&utrTeamType=singles", type: "image", size: "w-10 h-10" },
    { name: "Running", icon: `${basePath}/hobbies/strava.png`, link: "https://www.strava.com/activities/14222755631/overview", type: "image", size: "w-8 h-8" },
    { name: "Travel Vlogging", icon: `${basePath}/hobbies/yt-logo.webp`, link: "https://www.youtube.com/@DanielWang6", type: "image", size: "w-8 h-8" },
  ];

  // =========EXPERIENCES=======================================

  const experiences = [
    {
      type: "education",
      institution: "University of North Carolina at Chapel Hill",
      role: "B.S. Computer Science & Data Science",
      period: "2020 - 2024",
      description:
        "Double major with focus on machine learning and software engineering",
    },
    {
      type: "work",
      institution: "Tech Company A",
      role: "Software Engineering Intern",
      period: "Summer 2023",
      description: "Developed full-stack applications using React and Node.js",
    },
    {
      type: "work",
      institution: "Research Lab",
      role: "Undergraduate Researcher",
      period: "2022 - 2023",
      description: "Conducted data analysis and machine learning research",
    },
  ];
  
  // =========================================
  // ==================CLUBS==================

  const clubs = [
    {
      name: "CS Club",
      description:
        "Undergraduate computer science organization focused on professional development",
      image: `${basePath}/hero-imgs/ricowater.JPEG`,
    },
    {
      name: "Data Science Society",
      description:
        "Student group exploring data science applications and hosting workshops",
      image: `${basePath}/hero-imgs/koi.JPG`,
    },
    {
      name: "Hackathon Team",
      description:
        "Competitive coding team participating in hackathons across the country",
      image: `${basePath}/hero-imgs/ericgrad.JPG`,
    },
  ];

  const projects = [
    {
      id: "0",
      title: "SWIFT Banking Simulator",
      date: "Jun 2025 - Aug 2025",
      description: "Deployed a SWIFT MT54X Message simulator for Fidelity's Agency Lending Team to automate testing of securities transactions.",
      customIcon: `${basePath}/project-imgs/fid.png`,
      imageUrl: `${basePath}/project-imgs/SWIFT.png`,
      technologies: ["Spring Boot", "Java", "Oracle SQL", "IBM MQ", "AWS EKS"],
    },
    {
      id: "1",
      title: "CSXL Website AI Study Buddy",
      date: "Jan 2025 - May 2025",
      description: "A full-stack AI-assisted study buddy feature for the UNC CSXL site used by more than 2,000+ CS students.",
      githubUrl: "https://github.com/comp423-25s/csxl-team-f3",
      imageUrl: `${basePath}/project-imgs/studybud.gif`,
      technologies: ["Angular", "FastAPI", "SQLAlchemy", "OpenAI API", "OKD Kubernetes"],
    },
    {
      id: "2",
      title: "Milwaukee Bucks NBA Ticket Plan Strategies",
      date: "Feb 2025",
      description:
        "2 Place Hackathon predictive analytics solution and business model for identifying behavior for newly introduced season ticket plans.",
      githubUrl: "https://www.nba.com/bucks/hackathon?trk=public_post_main-feed-card-text",
      imageUrl:
        `${basePath}/project-imgs/buckshack.png`,
      technologies: ["Python", "Pandas", "Matplotlib", "NumPy"],
    },
    {
      id: "3",
      title: "Traveling Tourists Problem",
      date: "Oct 2024",
      description:
        "1st Place CDC Hackathon Project: Optimized travel router itenerary",
      githubUrl: "https://github.com/Traveling-Tourists/CarolinaDataChallenge2024",
      imageUrl: `${basePath}/project-imgs/tourist.gif`,
      technologies: ["Python", "Folium", "Streamlit", "Pandas", "RestAPI"],
    },
    {
      id: "8",
      title: "AKARI",
      date: "Dec 2025",
      description:
        "Simple recreation of the popular game Akari.",
      hideIcon: true,
      imageUrl: `${basePath}/project-imgs/Akari.gif`,
      technologies: ["Java", "Maven", "CSS"],
    },
    {
      id: "4",
      title: "iMarket Product App",
      date: "Aug - Sept 2024",
      description:
        "Mock shopping IOS App for saving favorites and adding items to shoppingcart.",
      githubUrl: "https://github.com/danielwang23/iMarket",
      imageUrl: `${basePath}/project-imgs/iMarket.gif`,
      technologies: ["Swift", "SwiftUI", "RestAPI"],
    },
    {
      id: "5",
      title: "AspireWave Motivational App",
      date: "2024",
      description:
        "IOS App with Swift that provides a scrollable, interactive view of motivational quotes for users with the ZenQuotes API.",
      githubUrl: "https://github.com/danielwang23/AspireWave",
      imageUrl: `${basePath}/project-imgs/aspire.gif`,
      technologies: ["Swift", "SwiftUI", "RestAPI"],
    },
    {
      id: "6",
      title: "Predicting High-Risk Wildfire Zones",
      date: "Oct 2023",
      description:
        "Secure voting system built on blockchain technology for transparent elections.",
      githubUrl: "https://github.com/sarah-e-c/carolinaDataChallenge",
      imageUrl: `${basePath}/project-imgs/wildfire.png`,
      technologies: ["Python", "Tableau", "Scikit-learn", "Pandas", "NumPy"],
    },
    {
      id: "7",
      title: "Tennis Program Tracker",
      date: "2023",
      description:
        "High School tennis website to provide updates on match schedules, player statistics, and team news.",
      hideIcon: true,
      imageUrl: `${basePath}/project-imgs/usc_tennis.jpeg`,
      technologies: ["Javascript", "SQL", "HTML", "CSS"],
    },
  ];
  // ------------------------------------------------------------------------------

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="hero"
        className="relative flex items-center justify-center min-h-[100vh] w-full overflow-hidden"
      >
        {/* Rotating Background Images */}
        {heroInView && <FloatingIcons />}
        {/* Floating Icons insert statement*/}

        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
          <motion.h1
            ref={nameRef}
            initial={{ opacity: 0, y: -20 }}
            animate={nameInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold mb-5 leading-snug pb-2 text-center bg-gradient-to-r from-[#7dd3fc] via-blue to-[#fdba74] bg-clip-text text-transparent"
          >
            Daniel Wang
          </motion.h1>

        
          <div className="flex items-center justify-center text-2xl md:text-3xl font-light mb-8">
            <span style={{ color: '#113281' }}>I'm a&nbsp;</span>
            <RotatingWords words={["Student", "Athlete", "Creator", "Developer"]} color="#98d6ff" />
          </div>
          <div className="flex gap-6 justify-center mt-0.2">
            <a href="https://github.com/danielwang23" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} className="h-7 w-7 text-black hover:text-[#4B9CD3] transition-colors duration-450" />
            </a>
            <a href="https://www.linkedin.com/in/daniel-wang23/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} className="h-7 w-7 text-black hover:text-[#4B9CD3] transition-colors duration-450" />
            </a>
            <a href="mailto:dalbertw@ad.unc.edu" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} className="h-7 w-7 text-black hover:text-[#4B9CD3] transition-colors duration-450" />
            </a>
          </div>
        </div>
        {/* Overlay for darkening background for readability */}
        <div className="absolute inset-0 bg-sky-100 bg-opacity-50 -z-10" />
      </section>


{/* ABOUT ME SECTION================================================ */}


      {/* About Me Section */}
      
       <section
         id="about"
         className="relative py-16 px-4 md:px-8 bg-white min-h-[80vh]"
       >
         {/* overlay behind all the content */}
         <div className="absolute inset-0 bg-white/80 -z-10" />
         <div className="container mx-auto max-w-6xl">
           <div className="flex flex-col items-center mb-8">
             <h2 className="text-3xl font-bold text-[#13294B] text-center">About Me</h2>
             <div className="flex justify-center items-center w-3/4 max-w-[120px] mx-auto mt-2">
               <div className="h-0.5 bg-gray-300 flex-grow"></div>
               <div className="h-1 bg-[#98d6ff] w-1/3"></div>
               <div className="h-0.5 bg-gray-300 flex-grow"></div>
             </div>
           </div>
           <div className="flex flex-col md:flex-row gap-8 items-start">
             <div className="flex-1">
               <motion.p
                 ref={ref1}
                 variants={textVariants}
                 initial="hidden"
                 animate={inView1 ? "visible" : "hidden"}
                 transition={{ delay: 0.1 }}
                 className="text-lg mb-6"
               >
                 Hi! My name is Daniel Wang and I am currently a Junior at UNC Chapel Hill 
                 double majoring in Computer Science and Data Science.
               </motion.p>
               <motion.p
                 ref={ref2}
                 variants={textVariants}
                 initial="hidden"
                 animate={inView2 ? "visible" : "hidden"}
                 transition={{ delay: 0.2 }}
                 className="text-lg mb-6"
               >
                 I enjoy tackling complex problems and turning the data surrounding us into
                 actionable insights that drive impactful change. I am excited to expand on my skills in
                 leveraging ML/NLP in software development and data analytics, as well as understand 
                 financial risk management through data. 
               </motion.p>
               <motion.p
                 ref={ref3}
                 variants={textVariantsP3}
                 initial="hidden"
                 animate={inView3 ? "visible" : "hidden"}
                 transition={{ delay: 0.2 }}
                 className="text-lg mb-6"
               >
                 To me, data visualization is like photography—using the right lens and composition 
                 to transform raw data into captivating stories. In my free time, I enjoy tennis, 
                 traveling, playing guitar, photography, and social & outdoor activities. 
               </motion.p>

               {/* Personal Interests Section */}
               <div className="mt-8">
                 <h3 className="text-lg font-semibold mb-4 text-[#4B9CD3]">
                   Hobbies
                 </h3>
                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                   {interests.map((interest) => (
                     <a
                       key={interest.name}
                       href={interest.link}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="block"
                     >
                       <Card className="aspect-square w-24 h-24 
                                       flex flex-col items-center justify-center 
                                       p-1 
                                       rounded-none
                                       border-blue-200
                                       bg-[#00000]
                                       hover:shadow-lg transition-all duration-300 
                                       cursor-pointer shadow-md hover:scale-105
                                       relative group overflow-hidden">
                         {/* Content */}
                         <div className="flex flex-col items-center justify-center">
                           {interest.type === "icon" ? (
                             <div className="text-lg mb-0.5">{interest.icon}</div>
                           ) : (
                             <img 
                               src={interest.icon} 
                               alt={interest.name}
                               className={`${interest.size} mb-0.5 object-contain`}
                             />
                           )}
                           <p className="text-xs font-medium text-center leading-tight">{interest.name}</p>
                         </div>
                         
                         {/* Hover overlay */}
                         {/* <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-all duration-300">
                           <span className="text-black text-xs font-medium">See More!</span>
                         </div> */}
                       </Card>
                     </a>
                   ))}
                 </div>
               </div>

               {/* Did not use logos code below in this section */}
               {/* <div className="flex gap-4 mt-6">
                 <Button
                   asChild
                   variant="outline"
                   size="icon"
                   className="rounded-full"
                 >
                   <Link
                     href="https://github.com/yourusername"
                     target="_blank"
                     aria-label="GitHub"
                   >
                     <Github className="h-5 w-5" />
                   </Link>
                 </Button>
                 <Button
                   asChild
                   variant="outline"
                   size="icon"
                   className="rounded-full"
                 >
                   <Link
                     href="https://linkedin.com/in/yourusername"
                     target="_blank"
                     aria-label="LinkedIn"
                   >
                     <Linkedin className="h-5 w-5" />
                   </Link>
                 </Button>
                 <Button
                   asChild
                   variant="outline"
                   size="icon"
                   className="rounded-full"
                 >
                   <Link href="mailto:your.email@example.com" aria-label="Email">
                     <Mail className="h-5 w-5" />
                   </Link>
                 </Button>
               </div> */}
             </div>
             <div className="flex flex-col items-center md:self-start md:mt-[-2rem] md:ml-8">
               <motion.img
                 ref={ref4}
                 initial={{ x: 100, opacity: 0 }}
                 animate={inView4 ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                 transition={{ duration: 1.5, delay: 0.1 }}
                 src={`${basePath}/about-img/headshotCroppedMore.jpg`}
                 alt="Profile Photo"
                 className="h-64 w-64 md:h-80 md:w-80 rounded-full object-cover shadow-lg border-4 border-white mb-4"
               />
               <a
                 href={`${basePath}/Daniel_A_Wang_Resume.pdf`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-4 py-2 bg-[#4B9CD3] text-white font-semibold rounded-full shadow hover:bg-[#13294B] transition-colors duration-200"
               >
                 View Resume
                 <ExternalLink className="h-5 w-5 ml-1" />
               </a>
             </div>
           </div>
         </div>
       </section>

      {/* TECH STACK SECTION================================================ */}

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold text-[#13294B] text-center">Technology I Use</h2>
            <div className="flex justify-center items-center w-3/4 max-w-[200px] mx-auto mt-2">
              <div className="h-0.5 bg-gray-300 flex-grow"></div>
              <div className="h-1 bg-[#98d6ff] w-1/3"></div>
              <div className="h-0.5 bg-gray-300 flex-grow"></div>
            </div>
          </div>
          <div className="mb-10">
            <p>Some of my favorite languages, frameworks, and tools I frequently use to build fun projects.</p>
          </div>

          <div className="mb-2">
            <h3 className="text-xl font-semibold mb-2 text-[#4B9CD3]">
              Languages
            </h3>
            <div className="flex flex-wrap gap-1">
              {techStack.languages.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center flex-row p-2" // hover:shadow-md transition-all duration-200
                >
                  <div className="text-4xl mr-2">{tech.icon}</div>
                  <p className="text-sm font-medium text-gray-800">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-2">
            <h3 className="text-xl font-semibold mb-2 text-[#4B9CD3]">
              Frameworks & Libraries
            </h3>
            <div className="flex flex-wrap gap-1">
              {techStack.frameworks.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center flex-row p-2" 
                >
                  <div className="text-4xl mr-2">{tech.icon}</div>
                  <p className="text-sm font-medium text-gray-800">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-[#4B9CD3]">Dev Tools</h3>
            <div className="flex flex-wrap gap-1">
              {techStack.tools.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center flex-row p-2"
                >
                  <div className="text-4xl mr-2">{tech.icon}</div>
                  <p className="text-sm font-medium text-gray-800">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION================================================ */}
      {/* ================================================================== */}

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold text-[#13294B] text-center">Experience</h2>
            <div className="flex justify-center items-center w-3/4 max-w-[120px] mx-auto mt-2">
              <div className="h-0.5 bg-gray-300 flex-grow"></div>
              <div className="h-1 bg-[#98d6ff] w-1/3"></div>
              <div className="h-0.5 bg-gray-300 flex-grow"></div>
            </div>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-[#4B9CD3] transform -translate-x-1/2"></div>

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                <div
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="md:w-1/2 p-4">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <Badge
                        className={
                          exp.type === "education"
                            ? "bg-[#13294B]"
                            : "bg-[#4B9CD3]"
                        }
                      >
                        {exp.type === "education" ? "Education" : "Work"}
                      </Badge>
                      <h3 className="text-xl font-bold mt-2">
                        {exp.institution}
                      </h3>
                      <h4 className="text-lg font-medium text-gray-700">
                        {exp.role}
                      </h4>
                      <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                      <p className="text-gray-600">{exp.description}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 relative">
                    {/* Timeline node */}
                    <div className="absolute left-4 md:left-0 top-6 w-6 h-6 rounded-full bg-[#4B9CD3] border-4 border-white shadow md:transform md:translate-x-[-50%]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERESTS & CLUBS SECTION================================================ */}
      {/* ============================================================================= */}

      {/* Interests & Clubs Section */}
      <section id="interests" className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold text-[#13294B] text-center">Clubs!</h2>
            <div className="flex justify-center items-center w-3/4 max-w-[80px] mx-auto mt-2">
              <div className="h-0.5 bg-gray-300 flex-grow"></div>
              <div className="h-1 bg-[#98d6ff] w-1/3"></div>
              <div className="h-0.5 bg-gray-300 flex-grow"></div>
            </div>
          </div>
          <div className="mb-12">
            {/* <h3 className="text-xl font-semibold mb-6 text-[#4B9CD3]">Clubs</h3> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {clubs.map((club) => (
                <Card
                  key={club.name}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-32 overflow-hidden">
                    <img
                      src={club.image}
                      alt={club.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="text-lg font-bold mb-2">{club.name}</h4>
                    <p className="text-gray-600">{club.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ============================================PROJECTS============================================ */}
      {/* ================================================================================================ */}

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold text-[#13294B] text-center">Projects</h2>
            <div className="flex justify-center items-center w-3/4 max-w-[100px] mx-auto mt-2">
              <div className="h-0.5 bg-gray-300 flex-grow"></div>
              <div className="h-1 bg-[#98d6ff] w-1/3"></div>
              <div className="h-0.5 bg-gray-300 flex-grow"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                date={project.date}
                description={project.description}
                githubUrl={project.githubUrl}
                imageUrl={project.imageUrl}
                technologies={project.technologies}
                customIcon={project.customIcon}
                hideIcon={project.hideIcon}
              >
              </ProjectCard>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================CONTACT============================================ */}
      <section id="contact" className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold text-[#13294B] text-center">Contact Me</h2>
            <div className="flex justify-center items-center w-3/4 max-w-[140px] mx-auto mt-2">
              <div className="h-0.5 bg-gray-300 flex-grow"></div>
              <div className="h-1 bg-[#98d6ff] w-1/3"></div>
              <div className="h-0.5 bg-gray-300 flex-grow"></div>
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B9CD3]"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B9CD3]"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B9CD3]"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full bg-[#4B9CD3] hover:bg-[#13294B]"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#13294B] text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold">Daniel Wang</p>
              <p className="text-sm opacity-75">
                Computer Science & Data Science @ UNC Chapel Hill
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 rounded-full"
              >
                <Link
                  href="https://github.com/danielwang23"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 rounded-full"
              >
                <Link
                  href="https://linkedin.com/in/daniel-wang23"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 rounded-full"
              >
                <Link href="mailto:dalbertw@ad.unc.com" target="_blank" aria-label="Email">
                  <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <Separator className="my-6 bg-white/20" />
          <p className="text-center text-sm opacity-75">
            © {new Date().getFullYear()} Daniel Wang. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
