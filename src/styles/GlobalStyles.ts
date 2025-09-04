import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
    font-size: 16px;
    height: 100%;
  }
  
  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text};
  }
  
  h1 {
    font-size: ${({ theme }) => theme.fontSize['4xl']};
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSize['3xl']};
    }
  }
  
  h2 {
    font-size: ${({ theme }) => theme.fontSize['3xl']};
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    text-align: center;
    
    &::after {
      content: '';
      display: block;
      width: 80px;
      height: 4px;
      background-color: ${({ theme }) => theme.colors.accent};
      margin: ${({ theme }) => theme.spacing.sm} auto ${({ theme }) => theme.spacing.xl};
    }
  }
  
  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.default};
    
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
  
  ul, ol {
    padding-left: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  li {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  button, .btn {
    cursor: pointer;
    font-family: inherit;
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
    border: 2px solid ${({ theme }) => theme.colors.accent};
    background: transparent;
    color: ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    transition: ${({ theme }) => theme.transitions.default};
    display: inline-block;
    text-align: center;
    
    &:hover {
      background: rgba(100, 255, 218, 0.1);
      transform: translateY(-2px);
    }
    
    &:active {
      transform: translateY(0);
    }
    
    &.btn-primary {
      background: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.background};
      
      &:hover {
        background: transparent;
        color: ${({ theme }) => theme.colors.accent};
      }
    }
  }
  
  section {
    padding: ${({ theme }) => `${theme.spacing['2xl']} ${theme.spacing.lg}`};
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
    }
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
  
  .text-center {
    text-align: center;
  }
  
  .section-title {
    position: relative;
    display: inline-block;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    
    &::before {
      content: '02.';
      position: relative;
      margin-right: ${({ theme }) => theme.spacing.sm};
      color: ${({ theme }) => theme.colors.accent};
      font-family: ${({ theme }) => theme.fonts.secondary};
      font-size: ${({ theme }) => theme.fontSize.lg};
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.accent};
    }
  }
`;
