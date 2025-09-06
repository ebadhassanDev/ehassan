import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BlogPost from './BlogPost';

const BlogSection = styled.section`
  padding: 100px 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BlogHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 60px;
`;

const BlogTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize['3xl']};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
`;

const BlogSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.lg};
  max-width: 700px;
  margin: 0 auto;
`;

// Sample blog data - in a real app, this would come from an API
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React and TypeScript',
    date: 'September 4, 2023',
    excerpt: 'Learn how to set up a new React project with TypeScript and start building type-safe applications.',
    image: 'https://via.placeholder.com/600x400/0a192f/64ffda?text=React+TypeScript',
    slug: 'react-typescript-guide',
    tags: ['React', 'TypeScript', 'Frontend']
  },
  {
    id: 2,
    title: 'Building Scalable APIs with .NET Core',
    date: 'August 28, 2023',
    excerpt: 'Best practices for building scalable and maintainable APIs using .NET Core and C#.',
    image: 'https://via.placeholder.com/600x400/0a192f/64ffda?text=.NET+Core',
    slug: 'dotnet-core-apis',
    tags: ['.NET Core', 'C#', 'Backend', 'API']
  },
  {
    id: 3,
    title: 'Modern CSS with Styled Components',
    date: 'August 20, 2023',
    excerpt: 'How to write maintainable and scalable CSS in React using Styled Components.',
    image: 'https://via.placeholder.com/600x400/0a192f/64ffda?text=Styled+Components',
    slug: 'styled-components-guide',
    tags: ['CSS', 'React', 'Frontend']
  }
];

const Blog: React.FC = () => {
  const [posts] = useState(blogPosts);

  return (
    <BlogSection id="blog">
      <BlogContainer>
        <BlogHeader
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <BlogTitle>Blog: ASP.NET Core, C#, Angular Tutorials & Case Studies</BlogTitle>
          <BlogSubtitle>
            Tutorials and insights on building scalable APIs with ASP.NET Core and C#, Angular frontends, EF Core with SQL Server, Azure Functions, Clean Architecture, and SaaS patterns.
          </BlogSubtitle>
        </BlogHeader>
        
        <BlogGrid>
          {posts.map((post, index) => (
            <BlogPost 
              key={post.id}
              post={post}
              index={index}
            />
          ))}
        </BlogGrid>
      </BlogContainer>
    </BlogSection>
  );
};

export default Blog;
