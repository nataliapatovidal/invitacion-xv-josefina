import React, { useState } from "react";
import flores from "../assets/flores.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function GaleriaFotos() {
  const [imagenActiva, setImagenActiva] = useState(null);

  const fotos = [
    "/img/foto1.jpg",
    "/img/foto2.jpg",
    "/img/foto3.jpg",
    "/img/foto4.jpg",
  ];

  return (
    <section className="galeria-fotos-seccion">
      <div className="flor-galeria-wrap">
        <img
          src={flores}
          alt="flores decorativas"
          className="flor-galeria-img"
        />
      </div>

      <div className="contenido-galeria">
        <h2>Mi esencia</h2>
        <p>Un pedacito de lo que Soy...</p>
      </div>

      <div className="swiper-galeria-wrap">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          speed={2500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 2.6,
              spaceBetween: 28,
            },
          }}
          className="mi-swiper-galeria"
        >
          {fotos.map((foto, i) => (
            <SwiperSlide key={i}>
              <img
                src={foto}
                alt={`Foto ${i + 1}`}
                className="foto-swiper"
                onClick={() => setImagenActiva(foto)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {imagenActiva && (
        <div className="modal-imagen" onClick={() => setImagenActiva(null)}>
          <img src={imagenActiva} alt="Imagen ampliada" />
        </div>
      )}
    </section>
  );
}

export default GaleriaFotos;