import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Eksal</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Project
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Connect Me
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.instagram.com/eksalp_/" className="footer__social-link" target="">
            <i class="bx bxl-instagram bx-tada bx-rotate-90"></i>
          </a>

          <a href="https://wa.me/6281280669465" className="footer__social-link" target="">
            <i class="bx bxl-whatsapp bx-tada bx-rotate-90"></i>
          </a>

          <a href="https://github.com/eksalp" className="footer__social-link" target="">
            <i class="bx bxl-github bx-tada bx-rotate-90"></i>
          </a>

          <a href="https://www.linkedin.com/in/eksal-pujianto-3136a8229" className="footer__social-link" target="">
            <i class="bx bxl-linkedin bx-tada bx-rotate-90"></i>
          </a>
        </div>

        <span className="footer__copy">Copyright © 2023 Eksal Pujianto, All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
