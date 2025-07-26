import React from 'react';
import './About.css';
import ConnectingLines from './ConnectingLines';

function About() {
  const technologies = [
    'PHP','React','React Native', 'Next.js', 'JavaScript','TypeScript', 'Node.js', 'Python', 'FastAPI',
    'PostgreSQL', 'MySQL','N8N','MongoDB', 'AWS', 'Docker', 'Git', 'Tailwind CSS', 'WordPress'
  ];

  return (
    <section id="sobre" className="about-container">
      <ConnectingLines />
      
      <div className="about-content" data-aos="fade-up">
        
        <h2 className="about-title">
           <span className="by-white">Sobre a By</span><span className="trez-purple">Trez</span>
        </h2>
        
        <p className="about-intro">
          Somos uma equipe de desenvolvedores freelancers apaixonados por tecnologia, dedicados a criar soluções digitais que impulsionam o sucesso dos nossos clientes.
        </p>

        <div className="mission-and-values-grid" data-aos-delay="200">
          <div className="mission-column">
            <h3 className="mission-title">Nossa Missão</h3>
            <p className="mission-description">
              Transformar ideias em realidade digital através de código limpo, design intuitivo e soluções inovadoras. Acreditamos que cada projeto é único e merece uma abordagem personalizada.
            </p>
            <ul className="feature-list">
              <li className="feature-item">
                <span className="material-symbols-rounded feature-icon">task_alt</span>
                <div className="feature-text"><h4>Qualidade Garantida</h4><p>Código testado e otimizado para performance máxima</p></div>
              </li>
              <li className="feature-item">
                <span className="material-symbols-rounded feature-icon">task_alt</span>
                <div className="feature-text"><h4>Entrega no Prazo</h4><p>Compromisso com prazos e comunicação transparente</p></div>
              </li>
              <li className="feature-item">
                <span className="material-symbols-rounded feature-icon">task_alt</span>
                <div className="feature-text"><h4>Suporte Contínuo</h4><p>Acompanhamento pós-entrega e manutenção</p></div>
              </li>
            </ul>
          </div>

          <div className="values-column">
            <div className="value-card"><span className="material-symbols-rounded">track_changes</span><div><h4>Foco no Cliente</h4><p>Cada decisão é tomada pensando no sucesso do seu negócio</p></div></div>
            <div className="value-card"><span className="material-symbols-rounded">lightbulb</span><div><h4>Inovação</h4><p>Sempre atualizados com as últimas tecnologias</p></div></div>
            <div className="value-card"><span className="material-symbols-rounded">workspace_premium</span><div><h4>Excelência</h4><p>Padrões elevados em cada linha de código</p></div></div>
            <div className="value-card"><span className="material-symbols-rounded">check_circle</span><div><h4>Resultados</h4><p>Foco em entregar valor real para seu negócio</p></div></div>
          </div>
        </div>

        <div className="technologies-section" data-aos-delay="300">
          <h3 className="tech-title">Tecnologias que Dominamos</h3>
          <div className="tech-pills">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-pill">{tech}</span>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default About;