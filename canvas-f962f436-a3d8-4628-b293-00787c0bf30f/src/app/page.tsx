"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import ProjectsGrid from "@/components/ProjectsGrid";
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
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
// Framer Motion 2 import statements for animations below
import { hover, motion } from 'framer-motion';
import { faBasketball, faCamera, faGuitar, faLeaf, faCode, faTableTennisPaddleBall, faMountainSun } from '@fortawesome/free-solid-svg-icons';

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

// ----Background Image (Not used since using floating objects)----


// const heroImages = [
//   "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&q=80",
//   "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1600&q=80",
//   "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=1600&q=80",
//   "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&q=80",
// ];

// function HeroBackground() {
//   const [bgIndex, setBgIndex] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBgIndex((prev) => (prev + 1) % heroImages.length);
//     }, 7000); // 7 seconds per image
//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <>
//       {heroImages.map((img, i) => (
//         <img
//           key={img}
//           src={img}
//           alt="Background"
//           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] z-0 ${i === bgIndex ? 'opacity-100' : 'opacity-0'}`}
//           style={{ transitionProperty: 'opacity' }}
//         />
//       ))}
//     </>
//   );
// }
// ----ABOVE IS BACKGROUND IMAGE CODE PART (NOT USED)----


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
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      {/* FontAwesome icons in fixed positions */}
      {floatingObjects.map((obj, i) => (
        <motion.div
          key={i}
          style={{ ...obj.style, position: 'absolute' }}
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 2,
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
            y: [0, -15, 0, 15, 0],
            x: [0, 8, 0, -8, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 2,
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
  );
}
// ----FLOATING OBJECTS CODE PART----
// =================================================



export default function Home() {
  // Mock data for the portfolio
  const techStack = {
    languages: [
      { name: "Python", icon: "🐍" },
      { name: "JavaScript", icon: "📜" },
      { name: "TypeScript", icon: "📘" },
      { name: "Java", icon: "☕" },
      { name: "C++", icon: "⚙️" },
      { name: "R", icon: "📊" },
    ],
    frameworks: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Node.js", icon: "🟢" },
      { name: "TailwindCSS", icon: "🌊" },
      { name: "Django", icon: "🦄" },
    ],
    tools: [
      { name: "Git", icon: "📂" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
      { name: "Figma", icon: "🎨" },
      { name: "VS Code", icon: "💻" },
    ],
  };

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

    // ==================INTERESTS==================


  const interests = [
    { name: "Photography", icon: "/hobbies/cam-logo2.png", link: "https://www.instagram.com/danielwangphotography/", type: "image", size: "w-12 h-12" },
    { name: "Guitar", icon: "/hobbies/guitar.png", type: "image", size: "w-10 h-10" },
    { name: "Tennis", icon: "/hobbies/utrlogo.png", link: "https://app.utrsports.net/search?sportTypes=tennis,pickleball&type=players&startDate=06/17/2025&utrMax=16&utrMin=1&utrTeamType=singles", type: "image", size: "w-10 h-10" },
    { name: "Running", icon: "/hobbies/strava.png", link: "https://www.strava.com/activities/14222755631/overview", type: "image", size: "w-8 h-8" },
    { name: "Travel Vlogging", icon: "/hobbies/yt-logo.webp", link: "https://www.youtube.com/@DanielWang6", type: "image", size: "w-8 h-8" },
  ];

  // ==================CLUBS==================

  const clubs = [
    {
      name: "CS Club",
      description:
        "Undergraduate computer science organization focused on professional development",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80",
    },
    {
      name: "Data Science Society",
      description:
        "Student group exploring data science applications and hosting workshops",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    },
    {
      name: "Hackathon Team",
      description:
        "Competitive coding team participating in hackathons across the country",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
    },
  ];
  // ------------------------------------------------------------------------------

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex items-center justify-center min-h-[90vh] w-full overflow-hidden"
      >
        {/* Rotating Background Images */}
        {/* <HeroBackground /> */}
        {/* Commented out above insert statements because using floating objects instead */}

        <FloatingIcons />
        {/* Floating Icons insert statement*/}

        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-5 leading-snug pb-2 text-center bg-gradient-to-r from-[#7dd3fc] via-blue to-[#fdba74] bg-clip-text text-transparent">
            Daniel Wang
          </h1>

        
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
        <div className="absolute inset-0 bg-[#e3f0ff]/25 z-0" />
      </section>


{/* ABOUT ME SECTION================================================ */}


      {/* About Me Section */}
      <section id="about" className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-[#13294B]">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <p className="text-lg mb-6">
                Hi! My name is Daniel Wang and I am currently a Junior at UNC Chapel Hill 
                double majoring in Computer Science and Data Science.
              </p>
              <p className="text-lg mb-6">
                I enjoy tackling complex problems and turning the data surrounding us into
                actionable insights that drive impactful change. I am excited to expand on my skills in
                leveraging ML/NLP in software development and data analytics, as well as understand 
                financial risk management through data. 
              </p>
              <p className="text-lg mb-6">
                To me, data visualization is like photography—using the right lens and composition 
                to transform raw data into captivating stories. In my free time, I enjoy tennis, 
                traveling, playing guitar, photography, and social & outdoor activities. 
              </p>

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
              <img
                src="/about-img/headshotCroppedMore.jpg"
                alt="Profile Photo"
                className="h-64 w-64 md:h-80 md:w-80 rounded-full object-cover shadow-lg border-4 border-white mb-4"
              />
              <a
                href="/Resume_Daniel_Wang.pdf"
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
          <h2 className="text-3xl font-bold mb-8 text-[#13294B]">Tech Stack</h2>

          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4 text-[#4B9CD3]">
              Languages
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {techStack.languages.map((tech) => (
                <Card
                  key={tech.name}
                  className="flex flex-col items-center p-4 hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <p className="font-medium">{tech.name}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4 text-[#4B9CD3]">
              Frameworks
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {techStack.frameworks.map((tech) => (
                <Card
                  key={tech.name}
                  className="flex flex-col items-center p-4 hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <p className="font-medium">{tech.name}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#4B9CD3]">Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {techStack.tools.map((tech) => (
                <Card
                  key={tech.name}
                  className="flex flex-col items-center p-4 hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <p className="font-medium">{tech.name}</p>
                </Card>
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
          <h2 className="text-3xl font-bold mb-8 text-[#13294B]">Experience</h2>

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
          <h2 className="text-3xl font-bold mb-8 text-[#13294B]">
            Interests & Clubs
          </h2>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-[#4B9CD3]">Clubs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {clubs.map((club) => (
                <Card
                  key={club.name}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
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

          {/* Removed Personal Interests Section: It's moved to About Me */}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-[#13294B]">Projects</h2>
          <ProjectsGrid />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-[#13294B]">Contact Me</h2>

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
              <p className="text-lg font-semibold">[Your Name]</p>
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
                  href="https://github.com/yourusername"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 rounded-full"
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
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 rounded-full"
              >
                <Link href="mailto:your.email@example.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <Separator className="my-6 bg-white/20" />
          <p className="text-center text-sm opacity-75">
            © {new Date().getFullYear()} [Your Name]. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
