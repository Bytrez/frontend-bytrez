import React, { useEffect } from 'react';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import Team from './components/Team/Team.jsx';
import Contact from './components/Contact/Contact.jsx'; 
import Footer from './components/Footer/Footer.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Contact /> 
      </main>
      <Footer />
    </>
  );
}

export default App;