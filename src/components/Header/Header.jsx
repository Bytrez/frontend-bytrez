import { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let headerClassName = 'header-container';
  if (isMenuOpen) {
    headerClassName = 'header-container menu-open';
  }

  let navClassName = 'navigation';
  if (isMenuOpen) {
    navClassName = 'navigation nav-open';
  }
  
  return (
    <header className={headerClassName}>
      <div className="logo">
        <a href="#inicio">
          <span style={{color: "white"}}>By</span>Trez
        </a>
      </div>

      <nav className={navClassName}>
        <button className="close-menu-button" onClick={toggleMenu}>×</button>
        <ul>
          <li><a href="#inicio" onClick={toggleMenu}><span className="material-symbols-rounded">home</span>Início</a></li>
          <li><a href="#sobre" onClick={toggleMenu}><span className="material-symbols-rounded">info</span>Sobre</a></li>
          <li><a href="#servicos" onClick={toggleMenu}><span className="material-symbols-rounded">design_services</span>Serviços</a></li>
          <li><a href="#equipe" onClick={toggleMenu}><span className="material-symbols-rounded">group</span>Equipe</a></li>
          <li><a href="#contato" onClick={toggleMenu}><span className="material-symbols-rounded">mail</span>Contato</a></li>
          <li className="cta-mobile-li"><a href="#contato" className="cta-button-mobile" onClick={toggleMenu}>Fale Conosco</a></li>
        </ul>
      </nav>

      <a href="#contato" className="cta-button-desktop">
        Fale Conosco
      </a>

      <button className="hamburger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
    </header>
  );
}

export default Header;