import { useEffect, useRef, useState } from "react";
import "./App.css";
import musica from "./assets/musica.mp3";
import GaleriaFotos from "./componentes/GaleriaFotos";



import EntradaMusica from "./componentes/EntradaMusica";
import Portada from "./componentes/Portada";
import CuentaRegresiva from "./componentes/CuentaRegresiva";
import Evento from "./componentes/Evento";

function App() {
  const audioRef = useRef(null);
  const [mostrarEntrada, setMostrarEntrada] = useState(true);
  const [musicaActiva, setMusicaActiva] = useState(false);
  const [tiempo, setTiempo] = useState({
    dias: "00",
    horas: "00",
    minutos: "00",
    segundos: "00",
  });

  // --- Lógica del Contador ---
  useEffect(() => {
    const fechaEvento = new Date("2026-06-20T21:00:00-03:00").getTime();

    const intervalo = setInterval(() => {
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;
    // ... resto de tu lógica

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

  // --- Funciones de Música ---
  const entrarConMusica = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.volume = 0.4;
        await audioRef.current.play();
        setMusicaActiva(true);
      }
    } catch (error) {
      console.log("Error música:", error);
    }
    setMostrarEntrada(false);
  };

  const entrarSinMusica = () => {
    if (audioRef.current) audioRef.current.pause();
    setMusicaActiva(false);
    setMostrarEntrada(false);
  };

  const toggleMusica = async () => {
    if (!audioRef.current) return;
    if (musicaActiva) {
      audioRef.current.pause();
      setMusicaActiva(false);
    } else {
      try {
        await audioRef.current.play();
        setMusicaActiva(true);
      } catch (error) {}
    }
  };

  return (
    <>
      {/* Elemento de Audio oculto */}
      <audio ref={audioRef} loop>
        <source src={musica} type="audio/mpeg" />
      </audio>

      {/* Pantalla de bienvenida con selección de música */}
      {mostrarEntrada && (
        <EntradaMusica
          onConMusica={entrarConMusica}
          onSinMusica={entrarSinMusica}
        />
      )}

      {/* Botón flotante de música (solo se ve después de entrar) */}
      {!mostrarEntrada && (
        <button className="boton-musica" onClick={toggleMusica}>
          {musicaActiva ? "♫" : "♪"}
        </button>
      )}

      {/* ESTRUCTURA PARA LA SOMBRA LATERAL (Igual a la captura) */}
      <div className="wrapper-fuera">
        <div className="contenedor-principal">
          <Portada />
          <CuentaRegresiva tiempo={tiempo} />
          <Evento />
          <GaleriaFotos />
        </div>
      </div>
    </>
  );
}

export default App;