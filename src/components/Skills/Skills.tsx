import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';
import { SiCsharp, SiDotnet, SiTypescript, SiReact, SiAzuredevops } from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 100px 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const SkillsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const SkillCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 30px;
  text-align: center;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 20px;
`;

const SkillTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 15px;
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.fontSize.md};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const skills = [
  {
    title: 'Frontend Development',
    icon: <FaCode />,
    items: [
      { name: 'React', icon: <SiReact /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'HTML5 / CSS3', icon: <FaCode /> },
      { name: 'Styled Components', icon: <FaCode /> }
    ]
  },
  {
    title: 'Backend Development',
    icon: <FaServer />,
    items: [
      { name: 'C#', icon: <SiCsharp /> },
      { name: '.NET Core', icon: <SiDotnet /> },
      { name: 'ASP.NET', icon: <SiDotnet /> },
      { name: 'RESTful APIs', icon: <FaServer /> }
    ]
  },
  {
    title: 'Database',
    icon: <FaDatabase />,
    items: [
      { name: 'SQL Server', icon: <FaDatabase /> },
      { name: 'Entity Framework', icon: <FaDatabase /> },
      { name: 'MongoDB', icon: <FaDatabase /> },
      { name: 'Redis', icon: <FaDatabase /> }
    ]
  },
  {
    title: 'DevOps & Cloud',
    icon: <FaCloud />,
    items: [
      { name: 'Azure', icon: <FaCloud /> },
      { name: 'Docker', icon: <FaCloud /> },
      { name: 'CI/CD', icon: <SiAzuredevops /> },
      { name: 'Git', icon: <FaCode /> }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>
        
        <SkillsGrid>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.items.map((item, i) => (
                    <SkillItem key={i}>
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </SkillItem>
                  ))}
                </SkillList>
              </SkillCard>
            </motion.div>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
