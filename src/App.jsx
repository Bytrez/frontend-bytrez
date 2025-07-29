import React, { useEffect, Suspense } from 'react';
import Header from './components/Header/Header.jsx';
const Hero = React.lazy(() => import('./components/Hero/Hero.jsx'));
const About = React.lazy(() => import('./components/About/About.jsx'));
const Services = React.lazy(() => import('./components/Services/Services.jsx'));
const Team = React.lazy(() => import('./components/Team/Team.jsx'));
const Contact = React.lazy(() => import('./components/Contact/Contact.jsx'));
const Footer = React.lazy(() => import('./components/Footer/Footer.jsx'));
import Loader from './components/Loader/Loader.jsx';

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
        <Suspense fallback={<Loader />}>
          <Hero />
          <About />
          <Services />
          <Team />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;