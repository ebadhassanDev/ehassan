import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaFileDownload, FaLinkedin } from 'react-icons/fa';

const HireMeContainer = styled.section`
  padding: 100px 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Section = styled(motion.div)`
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 40px;
  margin-bottom: 30px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 25px;
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['4xl']};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 30px;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 40px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 20px;
  font-weight: 600;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
`;

const ListItem = styled.li`
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.6;
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: bold;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.a<{ primary?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 500;
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.default};
  font-size: ${({ theme }) => theme.fontSize.md};
  cursor: pointer;
  
  ${({ primary, theme }) => primary 
    ? `
      background-color: ${theme.colors.accent};
      color: ${theme.colors.background};
      
      &:hover {
        background-color: ${theme.colors.accent};
        opacity: 0.9;
        transform: translateY(-2px);
      }
    `
    : `
      background-color: transparent;
      color: ${theme.colors.accent};
      border: 1px solid ${theme.colors.accent};
      
      &:hover {
        background-color: rgba(100, 255, 218, 0.1);
        transform: translateY(-2px);
      }
    `
  }
  
  svg {
    margin-right: 8px;
  }
`;

const AvailabilityItem = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.textSecondary};
  
  &::before {
    content: '✓';
    color: ${({ theme }) => theme.colors.accent};
    margin-right: 10px;
    font-weight: bold;
  }
`;

const HireMe: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:ebadhassan.dev@gmail.com?subject=Hire Me – Remote Developer Opportunity';
  };

  return (
    <HireMeContainer id="hire-me">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title>Hire Me</Title>
          <Subtitle>
            I'm a .NET Full Stack Developer with 3+ years of experience in building scalable APIs, 
            cloud integrations, and modern web applications. I'm currently open to remote 
            opportunities worldwide—whether freelance, contract, or full-time.
          </Subtitle>

          <Section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SectionTitle>What I Offer</SectionTitle>
            <List>
              <ListItem>Backend development (ASP.NET Core, EF Core, Dapper, APIs)</ListItem>
              <ListItem>Frontend apps (Angular, React)</ListItem>
              <ListItem>Database design & optimization (SQL, MongoDB)</ListItem>
              <ListItem>Cloud integrations (Azure Functions, SharePoint, Stripe)</ListItem>
            </List>
          </Section>

          <Section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SectionTitle>Availability</SectionTitle>
            <AvailabilityItem>Available for remote work</AvailabilityItem>
            <AvailabilityItem>Full-time or project-based</AvailabilityItem>
            <AvailabilityItem>Comfortable with international clients and time zones</AvailabilityItem>
          </Section>

          <Section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SectionTitle>Why Work With Me</SectionTitle>
            <List>
              <ListItem>Clean architecture and best coding practices</ListItem>
              <ListItem>Strong problem-solving and debugging skills</ListItem>
              <ListItem>Experience with modern tools (Azure, GitHub Actions, Docker)</ListItem>
              <ListItem>Focus on delivering scalable, maintainable solutions</ListItem>
            </List>

            <SectionTitle>Get In Touch</SectionTitle>
            <ButtonGroup>
              <Button primary onClick={handleEmailClick}>
                <FaEnvelope /> Hire Me
              </Button>
              <Button href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FaFileDownload /> Download Resume
              </Button>
              <Button 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </Button>
            </ButtonGroup>
          </Section>
        </motion.div>
      </Container>
    </HireMeContainer>
  );
};

export default HireMe;
