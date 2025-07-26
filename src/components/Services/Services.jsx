import React from 'react';
import './Services.css';
import BlueprintGrid from './BluePrintGrid';

const servicesData = [
  { icon: 'language', title: 'Desenvolvimento Web', description: 'Aplicações web modernas e responsivas usando React, Next.js e tecnologias de ponta.', includes: ['SPAs & PWAs', 'E-commerce', 'Dashboards', 'Landing Pages'] },
  { icon: 'smartphone', title: 'Aplicativos Mobile', description: 'Apps nativos e híbridos para iOS e Android com performance otimizada.', includes: ['React Native', 'Flutter', 'Apps Nativos', 'Cross-platform'] },
  { icon: 'database', title: 'Backend & APIs', description: 'Sistemas robustos e escaláveis com APIs RESTful e GraphQL.', includes: ['Node.js', 'Python', 'Microsserviços', 'Integrações'] },
  { icon: 'cloud', title: 'Cloud & DevOps', description: 'Deploy, monitoramento e manutenção em nuvem com alta disponibilidade.', includes: ['AWS', 'Docker', 'CI/CD', 'Monitoramento'] },
  { icon: 'support_agent', title: 'Consultoria Tech', description: 'Análise técnica, arquitetura de sistemas e otimização de performance.', includes: ['Code Review', 'Arquitetura', 'Performance', 'Segurança'] },
  { icon: 'code', title: 'Desenvolvimento Custom', description: 'Soluções sob medida para necessidades específicas do seu negócio.', includes: ['Automação', 'Integrações', 'Ferramentas', 'Sistemas'] }
];

const processData = [
  { icon: 'search', title: 'Análise', description: 'Entendemos suas necessidades e objetivos' },
  { icon: 'rule', title: 'Planejamento', description: 'Criamos a estratégia e arquitetura do projeto' },
  { icon: 'terminal', title: 'Desenvolvimento', description: 'Codificamos com qualidade e agilidade' },
  { icon: 'rocket_launch', title: 'Entrega', description: 'Deploy e suporte contínuo' }
];

function Services() {
  return (
    <section id="servicos" className="services-container">
      <BlueprintGrid />
      <div className="services-content">
        <h2 className="services-title" data-aos="fade-up">Nossos Serviços</h2>
        <p className="services-intro" data-aos="fade-up" data-aos-delay="100">
          Oferecemos soluções completas de desenvolvimento, desde a concepção até a entrega e manutenção do seu projeto digital.
        </p>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
              <div className="card-header">
                <span className="material-symbols-rounded service-icon">{service.icon}</span>
              </div>
              <div className="card-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="includes-section">
                  <h4>Incluído:</h4>
                  <ul className="includes-list">
                    {service.includes.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              </div>
              <a href="#contato" className="service-button">Solicitar Orçamento</a>
            </div>
          ))}
        </div>
      </div>
      <div className="process-section" data-aos="fade-up">
        <h2 className="process-title">Nosso Processo de Trabalho</h2>
        <div className="process-steps">
          {processData.map((item, index) => (
            <div className="process-step" key={index} data-aos="fade-up" data-aos-delay={100 * index}>
              <div className="step-number">
                <span className="material-symbols-rounded">{item.icon}</span>
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;