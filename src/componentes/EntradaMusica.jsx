import { useState, useEffect } from "react";
import { DotLottiePlayer } from '@dotlottie/react-player';
import iconoHeart from "../assets/heart-2.json"; // El corazón animado sigue
import imgCorona from "../assets/corona.png"; // 1. IMPORTAMOS EL PNG DE LA CORONA

function EntradaMusica({ onConMusica }) {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCargando(false);
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pantalla-inicio">
      {cargando ? (
        <div className="loader-corazon">
          <div style={{ width: '150px', height: '150px' }}>
            <DotLottiePlayer
              src={iconoHeart}
              autoplay
              loop
            />
          </div>
        </div>
      ) : (
        <div className="caja-inicio fade-in">
          <p className="bienvenida-texto">
            Bienvenidos a la invitación de
          </p>

          {/* 👇 LA CORONA PNG ESTÁTICA ARRIBA DE JOSEFINA */}
          <div className="contenedor-corona">
            <img 
              src={imgCorona} 
              alt="Corona de Josefina" 
              className="img-corona"
            />
          </div>

          <h1 className="nombre-inicio">Josefina</h1>

          {/* 👇 LA LÍNEA SOLO ABAJO */}
          <div className="linea-decorativa"></div>

          <h2 className="subtitulo-inicio">Mis XV años</h2>

          <div className="botones-inicio">
            <button onClick={onConMusica} className="btn-inicio">
              Ingresar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EntradaMusica;