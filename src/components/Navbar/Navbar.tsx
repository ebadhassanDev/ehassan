import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import resumeFile from '../../assets/Resume/Ebad_Hassan.pdf';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 0 50px;
  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
  transition: ${({ theme }) => theme.transitions.default};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 25px;
  }
`;

const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  
  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

const NavLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  align-items: center;
  margin-left: auto;
  counter-reset: item 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(75vw, 400px);
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: ${({ theme }) => theme.transitions.default};
    z-index: 10;
    padding: 0;
    margin: 0;
  }
`;

const NavItem = styled.li`
  margin-left: 30px;
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  counter-increment: item;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0 0 20px 0;
    height: auto;
  }
`;

const NavLink = styled(ScrollLink)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
  text-decoration: none;
  padding: 10px 0;
  position: relative;
  cursor: pointer;
  
  &::before {
    content: '0' counter(item, decimal) '.';
    margin-right: 5px;
    color: ${({ theme }) => theme.colors.accent};
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: ${({ theme }) => theme.transitions.default};
  }
  
  &:hover::after {
    width: 100%;
  }
  
  &.active::after {
    width: 100%;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

const ResumeButton = styled.a`
  background: transparent;
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 0.75rem 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-family: ${({ theme }) => theme.fonts.secondary};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  margin-left: 15px;
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 20px 0 0;
    padding: 1rem 1.5rem;
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1000;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 5;
  backdrop-filter: blur(5px);
`;

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { to: 'about', text: 'About' },
    { to: 'skills', text: 'Skills' },
    { to: 'projects', text: 'Work' },
    { to: 'blog', text: 'Blog', isPage: true },
    { to: 'hire-me', text: 'Hire Me' },
    { to: 'contact', text: 'Contact' },
  ];

  return (
    <>
      <Nav style={isScrolled ? { height: '70px', boxShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.7)' } : {}}>
        <Logo>
          <ScrollLink to="home" smooth={true} duration={500} offset={-80}>
            <span>&lt;EH/&gt;</span>
          </ScrollLink>
        </Logo>

        <MobileMenuButton onClick={toggleMenu} aria-label="Menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>

        <NavLinks isOpen={isOpen}>
          {navItems.map((item, i) => (
            <NavItem key={i}>
              {item.isPage ? (
                <Link 
                  to={`/${item.to}`} 
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  onClick={closeMenu}
                >
                  {item.text}
                </Link>
              ) : (
                <NavLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  activeClass="active"
                  spy={true}
                  onClick={closeMenu}
                >
                  {item.text}
                </NavLink>
              )}
            </NavItem>
          ))}
          <ResumeButton
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            download="Ebad_Hassan_Resume.pdf"
            onClick={closeMenu}
          >
            Resume
          </ResumeButton>
        </NavLinks>
      </Nav>
      <Overlay isOpen={isOpen} onClick={closeMenu} />
    </>
  );
};

export default Navbar;
