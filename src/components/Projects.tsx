import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from './ui/Card';
import Section from './ui/Section';
import { projects } from '../data';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Card>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 
                       group-hover:opacity-100 transition-opacity duration-300"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transform transition-transform duration-500 
                   group-hover:scale-110"
        />
      </div>
      
      <CardContent>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-indigo-50 to-pink-50 
                       text-indigo-800 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <Github size={20} />
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <ExternalLink size={20} />
            Live Demo
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  return (
    <Section id="projects" className="bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-16">My Projects</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;