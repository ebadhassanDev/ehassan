import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Hero, About, Projects, Skills, Contact, Footer, Blog, HireMe } from './components';

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const setMeta = (title: string, description: string) => {
      document.title = title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    };

    if (location.pathname === '/hire-me') {
      setMeta(
        'Hire .NET Full Stack Developer | ASP.NET Core, Angular, C# | Ebad Hassan',
        'Hire a .NET Full Stack Developer with 3+ years experience in ASP.NET Core, C#, Angular, EF Core, SQL Server, Azure Functions, Clean Architecture, and Stripe subscriptions.'
      );
    } else if (location.pathname === '/blog') {
      setMeta(
        'Blog | ASP.NET Core, C#, Angular Tutorials & Case Studies | Ebad Hassan',
        'Technical blogs and tutorials on ASP.NET Core, C#, Angular, EF Core, Clean Architecture, Azure Functions, and SaaS development.'
      );
    } else {
      setMeta(
        'Ebad Hassan | .NET Full Stack Developer Portfolio | ASP.NET Core & Angular',
        'Portfolio of Ebad Hassan: .NET Full Stack Developer specializing in ASP.NET Core, C#, Angular, EF Core, SQL Server, Azure Functions, Clean Architecture, and SaaS apps.'
      );
    }
  }, [location.pathname]);

  const MainContent = () => (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </>
  );

  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/hire-me" element={<HireMe />} />
          <Route path="*" element={<MainContent />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
