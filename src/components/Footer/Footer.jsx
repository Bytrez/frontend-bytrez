import React from 'react';
import './Footer.css';
import logoImage from '../../assets/btz-logo.png';


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-about">
          <img src={logoImage} alt="Logo da BTZ" className="footer-logo-img" />
          <p>
            Equipe de desenvolvedores freelancers especializados em criar soluções digitais inovadoras que impulsionam o sucesso dos nossos clientes.
          </p>
          
        </div>

        <div className="footer-links">
          <h4>Serviços</h4>
          <ul>
            <li><a href="#servicos">Desenvolvimento Web</a></li>
            <li><a href="#servicos">Apps Mobile</a></li>
            <li><a href="#servicos">Backend & APIs</a></li>
            <li><a href="#servicos">Cloud & DevOps</a></li>
            <li><a href="#servicos">Consultoria</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#sobre">Sobre Nós</a></li>
            <li><a href="#equipe">Equipe</a></li>
            <li><a href="#contato">Contato</a></li>
            
          </ul>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>© {currentYear} BTZ. Todos os direitos reservados.</p>
        <p>Feito pela equipe ByTrez</p>
      </div>
    </footer>
  );
}

export default Footer;