import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 5%;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
`;

const HeroContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  z-index: 1;
`;

const Greeting = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

const Name = styled.h1`
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 700;
  margin: 0 0 20px 0;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.1;
`;

const Subtitle = styled.h2`
  font-size: clamp(20px, 5vw, 60px);
  font-weight: 600;
  margin: 0 0 20px 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.1;
`;

const Description = styled.div`
  max-width: 540px;
  margin-bottom: 40px;
  
  p {
    font-size: ${({ theme }) => theme.fontSize.lg};
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const Button = styled.a`
  display: inline-block;
  background: transparent;
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 1.25rem 1.75rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-family: ${({ theme }) => theme.fonts.secondary};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  margin-top: 20px;
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 40px;
  z-index: 10;
  
  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.textSecondary};
  }
  
  @media (max-width: 1080px) {
    left: 20px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialLink = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 10px 0;
  font-size: 20px;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
  }
`;

const EmailLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 40px;
  z-index: 10;
  writing-mode: vertical-rl;
  letter-spacing: 0.1em;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.default};
  
  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.textSecondary};
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
  }
  
  @media (max-width: 1080px) {
    right: 20px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection id="home">
      <SocialLinks>
        <SocialLink 
          href="https://github.com/ebadhassandev" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </SocialLink>
        <SocialLink 
          href="https://www.linkedin.com/in/ebad-hassan-5272a5192/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </SocialLink>
        <SocialLink 
          href="https://twitter.com/ebadhassan71" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </SocialLink>
      </SocialLinks>
      
      <HeroContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Greeting>Hi, my name is</Greeting>
          <Name>Ebad Hassan.</Name>
          <Subtitle>I build things for the web.</Subtitle>
          <Description>
            <p>
              I'm a C# developer specializing in building exceptional digital experiences. 
              Currently, I'm focused on building accessible, human-centered products.
            </p>
          </Description>
          <Button 
            href="#projects" 
            className="btn"
          >
            Check out my work!
          </Button>
        </motion.div>
      </HeroContent>
      
      <EmailLink 
        href="mailto:ebadhassan.dev@gmail.com"
        aria-label="Email"
      >
        ebadhassan.dev@gmail.com
      </EmailLink>
    </HeroSection>
  );
};

export default Hero;
