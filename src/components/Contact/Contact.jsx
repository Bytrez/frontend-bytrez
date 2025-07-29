
import React, { useState } from 'react';
import './Contact.css';
import { FaWhatsapp, FaEnvelope, FaTiktok } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', projectType: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '5547984860598';
    const messageText = `*Olá! Gostaria de solicitar um orçamento.*\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Telefone:* ${formData.phone || 'Não informado'}\n*Tipo de Projeto:* ${formData.projectType}\n\n*Mensagem:*\n${formData.message}`.trim();
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="contact-container">
      <div className="contact-content">
  <div className="contact-header" data-aos="fade-up">
    <h2 className="contact-heading">Vamos Começar?</h2>
    <p className="contact-subtitle">
      Entre em contato conosco e descubra como podemos transformar suas ideias em soluções digitais criativas, eficientes e de alto impacto.
    </p>
  </div>


        <div className="contact-grid">
          <div className="contact-info-column" data-aos="fade-right" data-aos-delay="200">
            <div className="info-card">
              <h3>Informações de Contato</h3>
              <ul>
                <li><FaEnvelope className="info-icon" /><div><span>Email</span><a href="mailto:contato@bytrez.com">contato@bytrez.com</a></div></li>
                <li><FaWhatsapp className="info-icon" /><div><span>WhatsApp</span><a href="https://wa.me/5547984860598" target="_blank" rel="noopener noreferrer">+55 (47) 98486-0598</a></div></li>
              </ul>
            </div>
            <div className="info-card">
              <h3>Redes Sociais</h3>
              <div className="social-icons">
                <a href="https://www.tiktok.com/@bytrez4" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok /></a>
              </div>
            </div>
            <div className="info-card response-time">
              <h3>Resposta Rápida</h3>
              <p>Geralmente respondemos em até 2 horas durante horário comercial.</p>
              <span className="online-status">Online agora</span>
            </div>
          </div>
          <div className="contact-form-wrapper" data-aos="fade-left" data-aos-delay="300">
            <h3>Conte-nos sobre seu projeto</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group-grid">
                <div className="form-group">
                  <label htmlFor="name">Nome *</label>
                  <input type="text" id="name" name="name" placeholder="Seu nome completo" required value={formData.name} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" placeholder="seu@email.com" required value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefone</label>
                  <input type="tel" id="phone" name="phone" placeholder="(11) 99999-9999" value={formData.phone} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="project-type">Tipo de Projeto *</label>
                  <select id="project-type" name="projectType" required value={formData.projectType} onChange={handleInputChange}>
                    <option value="">Selecione...</option>
                    <option value="Desenvolvimento Web">Desenvolvimento Web</option>
                    <option value="Aplicativo Mobile">Aplicativo Mobile</option>
                    <option value="Backend & API">Backend & API</option>
                    <option value="Consultoria Tech">Consultoria Tech</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem *</label>
                <textarea id="message" name="message" rows="5" placeholder="Conte-nos mais sobre seu projeto, objetivose e prazos..." required value={formData.message} onChange={handleInputChange}></textarea>
              </div>
              <button type="submit" className="submit-button">
                Enviar Mensagem
                <span className="material-symbols-rounded">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;