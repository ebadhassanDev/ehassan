import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRegComment, FaRegClock, FaTag } from 'react-icons/fa';

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    date: string;
    excerpt: string;
    image: string;
    slug: string;
    tags: string[];
  };
  index: number;
}

const PostCard = styled(motion.article)`
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.md};
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const PostImage = styled.div`
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
    transition: transform 0.3s ease;
    
    ${PostCard}:hover & {
      transform: scale(1.05);
    }
  }
`;

const PostContent = styled.div`
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const PostDate = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin-bottom: 15px;
  
  svg {
    margin-right: 5px;
  }
`;

const PostTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 15px;
  line-height: 1.4;
  
  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const PostExcerpt = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 20px;
  flex: 1;
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const ReadMore = styled(Link)`
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.sm};
  display: inline-flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
`;

const Tag = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding: 4px 10px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  
  svg {
    margin-right: 4px;
  }
`;

const BlogPost: React.FC<BlogPostProps> = ({ post, index }) => {
  const fallbackImage =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
        <rect width="100%" height="100%" fill="#0a192f"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#64ffda" font-family="Arial, sans-serif" font-size="36">Image unavailable</text>
      </svg>
    `);
  return (
    <PostCard
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <PostImage>
        <img 
          src={post.image} 
          alt={post.title} 
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackImage; }}
        />
      </PostImage>
      
      <PostContent>
        <PostDate>
          <FaRegClock /> {post.date}
        </PostDate>
        
        <PostTitle>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </PostTitle>
        
        <PostExcerpt>{post.excerpt}</PostExcerpt>
        
        <Tags>
          {post.tags.map((tag, i) => (
            <Tag key={i}>
              <FaTag size={10} /> {tag}
            </Tag>
          ))}
        </Tags>
        
        <PostMeta>
          <ReadMore to={`/blog/${post.slug}`}>
            Read More →
          </ReadMore>
          
          <Link to={`/blog/${post.slug}#comments`} style={{ color: 'inherit' }}>
            <FaRegComment />
          </Link>
        </PostMeta>
      </PostContent>
    </PostCard>
  );
};

export default BlogPost;
