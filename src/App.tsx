import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Hero, About, Projects, Skills, Contact, Footer, Blog, HireMe } from './components';

const App: React.FC = () => {
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
