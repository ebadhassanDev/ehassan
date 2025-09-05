import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub as FiGithub, FaExternalLinkAlt as FiExternalLink } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 100px 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.md};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const ProjectImage = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: ${({ theme }) => theme.transitions.default};
    
    ${ProjectCard}:hover & {
      transform: scale(1.05);
    }
  }
`;

const ProjectContent = styled.div`
  padding: 25px;
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.text};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.6;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;
`;

const TechItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.textSecondary};
  
  &::after {
    content: '●';
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.accent};
  }
  
  &:last-child::after {
    display: none;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.lg};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

// Simple inline SVG placeholder (data URL)
const fallbackImage =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
      <rect width="100%" height="100%" fill="#0a192f"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#64ffda" font-family="Arial, sans-serif" font-size="36">Image unavailable</text>
    </svg>
  `);

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with .NET Core, React, and SQL Server. Includes user authentication, product management, and payment processing.',
    technologies: ['C#', '.NET Core', 'React', 'SQL Server', 'Azure'],
    github: 'https://github.com/yourusername/ecommerce-platform',
    demo: 'https://ecommerce-demo.com',
    image: 'https://via.placeholder.com/600x400/0a192f/64ffda?text=E-Commerce+Platform'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates built using SignalR and Blazor WebAssembly.',
    technologies: ['C#', 'Blazor', 'SignalR', 'Entity Framework'],
    github: 'https://github.com/yourusername/task-management',
    demo: 'https://task-demo.com',
    image: 'https://via.placeholder.com/600x400/0a192f/64ffda?text=Task+Management+App'
  },
  {
    title: 'Weather API Service',
    description: 'A RESTful API service that provides weather data with caching and rate limiting using Redis and .NET Core.',
    technologies: ['C#', '.NET Core', 'Redis', 'Docker'],
    github: 'https://github.com/yourusername/weather-api',
    demo: 'https://weather-api-demo.com',
    image: 'https://via.placeholder.com/600x400/0a192f/64ffda?text=Weather+API+Service'
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with React, TypeScript, and Styled Components. The very site you\'re looking at!',
    technologies: ['React', 'TypeScript', 'Styled Components'],
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://yourportfolio.com',
    image: 'https://via.placeholder.com/600x400/0a192f/64ffda?text=Portfolio+Website'
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat application built with .NET Core and SignalR, featuring private messaging and group chats.',
    technologies: ['C#', '.NET Core', 'SignalR', 'Azure'],
    github: 'https://github.com/yourusername/chat-app',
    demo: 'https://chat-demo.com',
    image: 'https://via.placeholder.com/600x400/0a192f/64ffda?text=Chat+Application'
  },
  {
    title: 'Blog Engine',
    description: 'A customizable blog engine built with ASP.NET Core and React, featuring markdown support and SEO optimization.',
    technologies: ['C#', 'ASP.NET Core', 'React', 'PostgreSQL'],
    github: 'https://github.com/yourusername/blog-engine',
    demo: 'https://blog-demo.com',
    image: 'https://via.placeholder.com/600x400/0a192f/64ffda?text=Blog+Engine'
  }
];

const Projects: React.FC = () => {
  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Some Things I've Built
        </motion.h2>
        
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage>
                <img 
                  src={project.image}
                  alt={project.title}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackImage; }}
                />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechList>
                  {project.technologies.map((tech, i) => (
                    <TechItem key={i}>{tech}</TechItem>
                  ))}
                </TechList>
                <ProjectLinks>
                  {project.github && (
                    <ProjectLink 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FiGithub />
                    </ProjectLink>
                  )}
                  {project.demo && (
                    <ProjectLink 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink />
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
