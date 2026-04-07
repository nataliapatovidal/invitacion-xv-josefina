import React from 'react';

import logoImg from "../assets/logo.png";
import brillosImg from "../assets/brillos.png";
import floresImg from "../assets/flores.png";

const SeccionFinal = () => {
  return (
    <section className="seccion-final-container">
      {/* Brillos arriba */}
      <img src={brillosImg} alt="" className="brillos-top" />

      <div className="bloque-central">
        
        <h2 className="nombre-principal">Josefina</h2>
        <div className="linea-decorativa"></div>
        <p className="subtitulo-principal">Mis XV años</p>
        
        <div className="mensaje-confirmacion">
          <p>Confirmá tu asistencia</p>
          <p>y reservá la fecha...</p>
          <p className="highlight">¡¡Se viene una noche increíble!!</p>
        </div>
      </div>

      {/* Flores abajo */}
      <img src={floresImg} alt="" className="flores-bottom" />

      <footer className="footer-pixela">
        <p>Desarrollado con ❤️ por</p>
        <a href="https://www.instagram.com/pixela.3d" target="_blank" rel="noreferrer">
          <img src={logoImg} alt="Pixela 3D" className="logo-footer" />
        </a>

      </footer>
    </section>
  );
};

export default SeccionFinal;