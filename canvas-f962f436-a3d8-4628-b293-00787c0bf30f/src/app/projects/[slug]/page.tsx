import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Mock project data - in a real app, this would come from a database or API
const projects = [
  {
    slug: "machine-learning-classifier",
    title: "Machine Learning Classifier",
    description:
      "A machine learning classifier built with Python and scikit-learn that predicts student performance based on various factors. This project was developed as part of my Data Science coursework at UNC Chapel Hill.",
    longDescription:
      "This project implements a machine learning classifier that predicts student academic performance based on various socioeconomic, demographic, and behavioral factors. I used Python with scikit-learn to build and evaluate multiple classification models including Random Forest, Support Vector Machines, and Gradient Boosting. The final model achieved 87% accuracy on the test dataset, significantly outperforming baseline approaches. The project included extensive data preprocessing, feature engineering, and hyperparameter tuning to optimize performance.",
    process:
      "The development process involved several key steps: data collection from educational datasets, exploratory data analysis to identify patterns and correlations, feature selection and engineering to improve model performance, model training and evaluation using cross-validation, and finally deployment as a simple web application for demonstration purposes.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?w=800&q=80",
    ],
    technologies: [
      "Python",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Flask",
    ],
    githubUrl: "https://github.com/username/machine-learning-classifier",
    demoUrl: "https://demo-url.com/machine-learning-classifier",
  },
  {
    slug: "web-portfolio",
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills.",
    longDescription:
      "This portfolio website was designed and developed from scratch using Next.js and Tailwind CSS. The site features a clean, minimalist design with a focus on showcasing my projects, skills, and experience. It includes responsive layouts for all device sizes, dark/light mode toggle, smooth scrolling navigation, and optimized performance metrics.",
    process:
      "I started with wireframing the design in Figma, focusing on user experience and visual hierarchy. After finalizing the design, I implemented the frontend using Next.js for its performance benefits and SEO optimization. Tailwind CSS was used for styling to ensure consistency and rapid development. The site was deployed on Vercel with continuous integration from GitHub.",
    images: [
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
    githubUrl: "https://github.com/username/portfolio",
    demoUrl: "https://portfolio-demo.com",
  },
  {
    slug: "data-visualization-dashboard",
    title: "Data Visualization Dashboard",
    description:
      "An interactive dashboard for visualizing complex datasets using D3.js and React.",
    longDescription:
      "This data visualization dashboard provides interactive ways to explore and analyze complex datasets. Built with React and D3.js, it offers various visualization types including bar charts, line graphs, scatter plots, and heat maps. Users can filter data, zoom in on specific time periods, and export visualizations for reports. The dashboard was designed with accessibility in mind, ensuring that all visualizations include proper ARIA attributes and keyboard navigation.",
    process:
      "The development process began with identifying key visualization needs through user interviews. I then designed the dashboard layout and component structure, focusing on modularity and reusability. Implementation involved creating custom D3.js visualizations wrapped in React components, setting up state management with Context API, and optimizing performance for large datasets using virtualization and memoization techniques.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ],
    technologies: ["React", "D3.js", "TypeScript", "CSS Modules", "Netlify"],
    githubUrl: "https://github.com/username/data-viz-dashboard",
    demoUrl: "https://data-viz-demo.com",
  },
];

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center text-blue-700 hover:text-blue-900 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="bg-blue-50 text-blue-700 border-blue-200"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mb-8">
          <p className="text-lg text-gray-700 mb-4">{project.description}</p>
          <p className="text-gray-700">{project.longDescription}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden"
            >
              <Image
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <Card className="mb-8 bg-white">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Development Process
            </h2>
            <p className="text-gray-700">{project.process}</p>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {project.githubUrl && (
            <Button
              asChild
              variant="outline"
              className="flex items-center gap-2"
            >
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
          )}
          {project.demoUrl && (
            <Button
              asChild
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800"
            >
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
