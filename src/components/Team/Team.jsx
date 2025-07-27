import Tilt from 'react-parallax-tilt';
import './Team.css';
import SpotlightBackground from './SpotlightBackground';

import caioImage from '../../assets/team/caio.jpg';
import eduardoImage from '../../assets/team/eduardo.png';
import allanImage from '../../assets/team/allan.png';

const teamMembers = [
  { name: 'Caio Emanuel', role: 'Desenvolvedor Mobile', description: 'Desenvolvedor de apps modernos com alta performance e ótima usabilidade.', image: caioImage },
  { name: 'Caio Eduardo', role: 'Desenvolvedor Backend', description: 'Expert em arquitetura de sistemas e desenvolvimento de APIs robustas.', image: eduardoImage },
  { name: 'Allan Correa', role: 'Desenvolvedor Frontend', description: 'Focado em criar interfaces intuitivas e experiências de usuário excepcionais.', image: allanImage }
];

function Team() {
  return (
    <section id="equipe" className="team-container">
      <SpotlightBackground />
      <div className="team-content">
        <h2 className="team-title" data-aos="fade-up">Nossa Equipe</h2>
        <p className="team-intro" data-aos="fade-up" data-aos-delay="100">
          Conheça os desenvolvedores por trás da ByTrez. Cada um com sua especialidade e paixão por criar soluções digitais inovadoras.
        </p>
        <div className="team-cards-container">
          {teamMembers.map((member, index) => (
            <Tilt
              key={index}
              className="parallax-effect-glare-scale"
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              scale={1.0}
              transitionSpeed={1500}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 2)}
            >
              <div className="team-card">
                <img src={member.image} alt={`Foto de ${member.name}`} className="team-member-photo" loading='lazy'/>
                <div className="card-info">
                  <h3>{member.name}</h3>
                  <h4 className="member-role">{member.role}</h4>
                  <p>{member.description}</p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
        <div className="final-cta" data-aos="fade-up" data-aos-delay="500">
          <h3>Pronto para trabalhar com nossa equipe?</h3>
          <p>Entre em contato e vamos transformar sua ideia em realidade digital.</p>
          <a href="#contato" className="cta-button">Começar Projeto</a>
        </div>
      </div>
    </section>
  );
}

export default Team;