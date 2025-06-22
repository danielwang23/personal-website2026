import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

interface ProjectCardProps {
  id?: string;
  title: string;
  description?: string;
  imageUrl: string;
  technologies: string[];
  githubUrl: string;
}

const ProjectCard = ({
  id = "project-1",
  title = "Project Title",
  description = "A brief description of the project",
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  technologies = ["React", "TypeScript", "Tailwind"],
  githubUrl = "https://github.com",
}: ProjectCardProps) => {
  return (
    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-background border border-border">
        <div className="relative h-48 w-full overflow-hidden">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <Github className="h-4 w-4 text-muted-foreground" />
          </div>
          {description && (
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {description}
            </p>
          )}
        </CardContent>
        <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={`${id}-tech-${index}`}
              variant="secondary"
              className="text-xs"
            >
              {tech}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </a>
  );
};

export default ProjectCard;
