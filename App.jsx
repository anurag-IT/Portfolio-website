import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Header from './components/Header';


const App = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F2] selection:bg-[#E7A43B] selection:text-white overflow-x-hidden text-[#2D5A5A]">
      <Header />
      <main className="pt-20 md:pt-24">
        <Hero />
        <Services />
        <Experience />
        <Projects />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;