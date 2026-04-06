import { useEffect, useRef, useState } from "react";
import "./App.css";
// Borramos el import de la música para que no pese el proyecto
import GaleriaFotos from "./componentes/GaleriaFotos.jsx";
import EntradaMusica from "./componentes/EntradaMusica.jsx";
import Portada from "./componentes/Portada.jsx";
import CuentaRegresiva from "./componentes/CuentaRegresiva.jsx";
import Evento from "./componentes/Evento.jsx";
import Regalos from "./componentes/Regalos.jsx";
import brillos from "./assets/brillos.png";
import SeccionFinal from "./componentes/SeccionFinal.jsx";
function App() {
  // Mantenemos la referencia pero no la usaremos para play
  const audioRef = useRef(null);
  const [mostrarEntrada, setMostrarEntrada] = useState(true);
  
  const [tiempo, setTiempo] = useState({
    dias: "00",
    horas: "00",
    minutos: "00",
    segundos: "00",
  });

  // Contador regresivo (Lo dejamos igual)
  useEffect(() => {
    const fechaEvento = new Date("2026-06-20T21:00:00-03:00").getTime();
    const intervalo = setInterval(() => {
      const ahora = new Date().getTime();
      const diferencia = fechaEvento - ahora;
      if (diferencia <= 0) {
        setTiempo({ dias: "00", horas: "00", minutos: "00", segundos: "00" });
        clearInterval(intervalo);
        return;
      }
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

      setTiempo({
        dias: String(dias).padStart(2, "0"),
        horas: String(horas).padStart(2, "0"),
        minutos: String(minutos).padStart(2, "0"),
        segundos: String(segundos).padStart(2, "0"),
      });
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  // --- LAS FUNCIONES AHORA SOLO CIERRAN LA ENTRADA ---
  const entrarConMusica = () => {
    setMostrarEntrada(false);
  };

  const entrarSinMusica = () => {
    setMostrarEntrada(false);
  };

  return (
    <>
      {/* QUITAMOS LA ETIQUETA <AUDIO> DE AQUÍ */}

      {mostrarEntrada && (
        <EntradaMusica
          onConMusica={entrarConMusica}
          onSinMusica={entrarSinMusica}
        />
      )}

      {!mostrarEntrada && (
        <div className="wrapper-fuera">
          <div className="contenedor-principal">
            <Portada />
            <CuentaRegresiva tiempo={tiempo} />
            <Evento />
            <GaleriaFotos />
            <div className="brillos-wrap">
              <img src={brillos} alt="" className="brillos-global" />
            </div>
            <Regalos />
            <SeccionFinal />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
