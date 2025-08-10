import React from "react";
import { NavLink } from "react-router-dom";
// Importa os ícones do React Icons
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import "./CSS/Footer.css";

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Sobre a loja */}
        <div className="footer-section">
          <h3>Sobre Nós</h3>
          <p>
            Somos apaixonados por games e tecnologia! Aqui você encontra
            periféricos gamers de alta performance para elevar seu nível.
          </p>
        </div>

        {/* Links úteis */}
        <div className="footer-section">
          <h3>Links Rápidos</h3>
          <ul>
            <li><NavLink to="/">Início</NavLink></li>
            <li><NavLink to="/">Produtos</NavLink></li>
            <li><NavLink to="/">Contato</NavLink></li>
            <li><NavLink to="/">Suporte</NavLink></li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        {/* Contato */}
        <div className="footer-section">
          <h3>Contato</h3>
          <p>Email: contato@gamerstore.com</p>
          <p>Telefone: (11) 99999-9999</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} GamerStore - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default footer;
