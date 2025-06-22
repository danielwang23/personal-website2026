"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { Card } from "./ui/card";

interface Project {
  id: string;
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
  technologies: string[];
}

interface ProjectsGridProps {
  projects?: Project[];
}

export default function ProjectsGrid({ projects = [] }: ProjectsGridProps) {
  // Default projects if none are provided
  const defaultProjects: Project[] = [
    {
      id: "1",
      title: "Machine Learning Classifier",
      description:
        "A machine learning model to classify images using TensorFlow and Python.",
      slug: "ml-classifier",
      imageUrl:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
      technologies: ["Python", "TensorFlow", "Scikit-learn"],
    },
    {
      id: "2",
      title: "Personal Finance Dashboard",
      description:
        "Interactive dashboard for tracking personal finances and investments.",
      slug: "finance-dashboard",
      imageUrl:
        "/hero-imgs/backgroundmountain.jpeg",
      technologies: ["React", "D3.js", "Firebase"],
    },
    {
      id: "3",
      title: "Social Media Analytics Tool",
      description:
        "Tool for analyzing social media engagement and audience demographics.",
      slug: "social-analytics",
      imageUrl:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
      technologies: ["Python", "Flask", "MongoDB", "React"],
    },
    {
      id: "4",
      title: "Mobile Fitness App",
      description:
        "A fitness tracking application with workout plans and progress tracking.",
      slug: "fitness-app",
      imageUrl:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      technologies: ["React Native", "Firebase", "Node.js"],
    },
    {
      id: "5",
      title: "E-commerce Recommendation Engine",
      description:
        "Product recommendation system using collaborative filtering algorithms.",
      slug: "recommendation-engine",
      imageUrl:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      technologies: ["Python", "Pandas", "AWS", "SQL"],
    },
    {
      id: "6",
      title: "Blockchain Voting System",
      description:
        "Secure voting system built on blockchain technology for transparent elections.",
      slug: "blockchain-voting",
      imageUrl:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
    },
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-2">
            Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of my academic and personal projects showcasing my
            skills and interests.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              slug={project.slug}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
            />
          ))}
        </div>

        {displayProjects.length === 0 && (
          <Card className="p-8 text-center bg-white">
            <p className="text-gray-500">
              No projects available at the moment.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
