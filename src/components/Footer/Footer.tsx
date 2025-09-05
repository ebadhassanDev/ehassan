import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 30px 0;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 24px;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.secondary};
  
  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.default};
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
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
        <SocialLink 
          href="mailto:ebadhassan.dev@gmail.com" 
          aria-label="Email"
        >
          <FaEnvelope />
        </SocialLink>
      </SocialLinks>
      <Copyright>
        © {currentYear} Ebad Hassan. All rights reserved.
        <br />
        Built with React, TypeScript &amp; Styled Components
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
