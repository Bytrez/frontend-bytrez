
import React from 'react';
import './Hero.css';
import HeroBackground from './HeroBackground'; 
import logoImage from '../../assets/btz-logo.png'; 

function Hero() {
  return (
    <section id="inicio" className="hero-container">
      
      <HeroBackground />
      
      <div className="hero-content">
        <h1 className="hero-title" data-aos="fade-up">
          <img src={logoImage} alt="Logo da BTZ" className="hero-logo-img" />
        </h1>
        
        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="100">
          Equipe de desenvolvedores freelancers especializados em soluções digitais inovadoras
        </p>
        
        <p className="hero-description" data-aos="fade-up" data-aos-delay="200">
          Transformamos suas ideias em aplicações web e mobile de alta performance. Experiência, agilidade e qualidade em cada projeto.
        </p>
        
        <div className="hero-cta-buttons" data-aos="fade-up" data-aos-delay="300">
          <a href="#contato" className="cta-primary">Iniciar Projeto <span className="arrow">→</span></a>
          <a href="#equipe" className="cta-secondary">Conheça a Equipe</a>
        </div>
      </div>

      <div className="stats-cards">
        <div className="stat-card" data-aos="fade-up" data-aos-delay="400">
          <span className="material-symbols-rounded">code_blocks</span>
          <h3>20+</h3>
          <p>Projetos Entregues</p>
        </div>

        <div className="stat-card" data-aos="fade-up" data-aos-delay="500">
          <span className="material-symbols-rounded">groups</span>
          <h3>3</h3>
          <p>Desenvolvedores Especialistas</p>
        </div>

        <div className="stat-card" data-aos="fade-up" data-aos-delay="600">
          <span className="material-symbols-rounded">sentiment_very_satisfied</span>
          <h3>100%</h3>
          <p>Satisfação do Cliente</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;