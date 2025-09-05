import React from 'react';
import userAvatar from '../../assets/avatar/ebad_hassan.png';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 100px 0;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

const AboutContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const AboutText = styled.div`
  p {
    margin-bottom: 20px;
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
    
    &:last-child {
      margin-bottom: 0;
    }
    
    a {
      color: ${({ theme }) => theme.colors.accent};
      text-decoration: none;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.accent};
        transition: ${({ theme }) => theme.transitions.default};
      }
      
      &:hover::after {
        width: 100%;
      }
    }
  }
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0 10px;
  padding: 0;
  margin: 20px 0 0 0;
  overflow: hidden;
  list-style: none;
`;

const SkillItem = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  
  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.accent};
    font-size: ${({ theme }) => theme.fontSize.sm};
    line-height: 1.5;
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 400px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    top: 20px;
    left: 20px;
    z-index: -1;
    transition: ${({ theme }) => theme.transitions.default};
  }
  
  &:hover::before {
    top: 15px;
    left: 15px;
  }
  
  img {
    border-radius: ${({ theme }) => theme.borderRadius.md};
    filter: grayscale(100%) contrast(1) brightness(90%);
    transition: ${({ theme }) => theme.transitions.default};
    
    &:hover {
      filter: none;
    }
  }
  
  @media (max-width: 768px) {
    order: -1;
    margin-bottom: 30px;
  }
`;

const About: React.FC = () => {
  const skills = [
    'C#',
    '.NET Core',
    'ASP.NET',
    'Entity Framework',
    'SQL Server',
    'JavaScript',
    'TypeScript',
    'React',
    'Git',
    'Docker',
    'Azure',
    'RESTful APIs'
  ];

  return (
    <AboutSection id="about">
      <AboutContainer>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <AboutContent>
          <AboutText>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p>
                Hello! I'm Ebad Hassan, a passionate C# developer with a strong foundation in building robust and scalable web applications. 
                My journey in software development started with a curiosity about how things work, which led me to pursue a career in technology.
              </p>
              <p>
                I specialize in developing backend services and APIs using the .NET ecosystem. 
                My experience includes working with various technologies to deliver high-quality software solutions that meet both user needs and business goals.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <SkillsList>
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                  >
                    <SkillItem>{skill}</SkillItem>
                  </motion.div>
                ))}
              </SkillsList>
            </motion.div>
          </AboutText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <StyledPic>
              <img 
                src={userAvatar}
                alt="Developer at work" 
                width="360" 
                height="480"
              />
            </StyledPic>
          </motion.div>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
