import React, { useState } from "react";
// Importamos el reproductor y el archivo de confeti
import { DotLottiePlayer } from '@dotlottie/react-player';
import iconoConfeti from "../assets/confetti-1.json"; // <--- Nombre corregido

function Evento() {
  const [verTarjeta, setVerTarjeta] = useState(false);

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Emilio+Pettoruti+2191,+Córdoba";
  const whatsappHermanaUrl = "https://wa.me/5493518588107?text=Hola!%20Confirmo%20mi%20asistencia%20a%20los%20XV%20de%20Josefina";

  return (
    <section className="evento">
      <div className="caja-evento">
        
        {/* ICONO DE FIESTA ANIMADO */}
        <div className="contenedor-icono-fiesta" style={{ width: '100px', height: '100px', margin: '0 auto 10px' }}>
          <DotLottiePlayer
            src={iconoConfeti}
            autoplay
            loop
          />
        </div>

        <h2>Fiesta</h2>

        {/* BLOQUE: DÍA Y BOTÓN REVELAR INFO TARJETA */}
        <div className="bloque-evento">
          <h3>Día</h3>
          <p>Sábado 20 de junio - 21 hs</p>
          
          <button
            onClick={() => setVerTarjeta(!verTarjeta)} 
            className="boton-evento"
          >
            {verTarjeta ? "Ocultar Valor Tarjeta" : "Valor-Tarjeta"}
          </button>

          {/* --- DESPLEGABLE DE TARJETA INFO --- */}
          {verTarjeta && (
            <div className="detalles-tarjeta-desplegable animacion-fade-in">
              <div className="precio-box p-4 rounded shadow-sm">
                <div className="mb-3">
                  <h5 className="fw-bold mb-1">Adultos</h5>
                  <p className="precio mb-0">$80.000</p>
                  <small className="text-muted">
                    O en 2 cuotas de $40.000 (20/04 y 20/05)
                  </small>
                </div>

                <hr />

                <div>
                  <h5 className="fw-bold mb-1">Niños y adolescentes</h5>
                  <p className="precio mb-0">$10.000</p>
                  <small className="text-muted">(Hasta los 16 años)</small>
                </div>
              </div>

              <div className="datos-cbu-hermana">
                <p><strong>Alias:</strong> soledadvidal.mp</p>
                <p><strong>CVU:</strong> 0000003100098197890942</p>
                <p><strong>Nombre:</strong> Soledad Vidal</p>
              </div>
            </div>
          )}
        </div>

        {/* BLOQUE: LUGAR Y CONFIRMACIÓN HERMANA */}
        <div className="bloque-evento">
          <h3>Lugar</h3>
          <p>Jazz Eventos</p>
          <a 
            href={whatsappHermanaUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="boton-evento"
          >
            Confirmar asistencia
          </a>
        </div>

        {/* BLOQUE: DIRECCIÓN Y MAPA */}
        <div className="bloque-evento">
          <h3>Dirección</h3>
          <p>Emilio Pettoruti 2191 - Córdoba</p>
          <a 
            href={googleMapsUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="boton-evento"
          >
            ¿Cómo llegar?
          </a>
        </div>

      </div>
    </section>
  );
}

export default Evento;