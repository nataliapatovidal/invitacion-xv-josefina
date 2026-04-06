import React, { useState } from "react";
import { DotLottiePlayer } from '@dotlottie/react-player';
import iconoRegalo from "../assets/regalo-1.json"; 
import iconoVestuario from "../assets/vestuario.svg"; 

function Regalos() {
  const [mostrarCBU, setMostrarCBU] = useState(false);
  const [mostrarDetalleDress, setMostrarDetalleDress] = useState(false);

  return (
    <section className="regalos-seccion">
      
      {/* SECCIÓN DRESS CODE */}
      <div className="caja-regalos mb-3">
        <h2 className="titulo-regalos">Dress Code</h2>
        <p className="texto-regalos">Una orientación para tu vestuario</p>

        <div className="contenedor-icono-dress">
          <img 
            src={iconoVestuario} 
            alt="Dress Code" 
            className="svg-vestuario-animado" 
          />
        </div>

        <button
          className="boton-regalo"
          onClick={() => setMostrarDetalleDress(!mostrarDetalleDress)}
        >
          {mostrarDetalleDress ? "Ocultar" : "Elegante"}
        </button>

        {mostrarDetalleDress && (
          <div className="datos-regalo animacion-fade-in">
            <p className="mt-2">Te invitamos a asistir con vestimenta elegante para compartir juntos esta noche especial.</p>
          </div>
        )}
      </div>

      {/* SECCIÓN REGALOS */}
      <div className="caja-regalos">
        <h2 className="titulo-regalos">Regalos</h2>
        <p className="texto-regalos">Si deseás regalarme algo más...</p>

        <div className="icono-regalo-contenedor" style={{ width: '120px', height: '120px', margin: '0 auto' }}>
          <DotLottiePlayer src={iconoRegalo} autoplay loop />
        </div>

        <button className="boton-regalo" onClick={() => setMostrarCBU(!mostrarCBU)}>
          {mostrarCBU ? "Ocultar datos" : "Número de CBU"}
        </button>

        {mostrarCBU && (
          <div className="datos-regalo animacion-fade-in">
            <p><strong>Titular:</strong> Josefina Sincovich Vidal</p>
            <p><strong>Alias:</strong> josesincovich</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Regalos;