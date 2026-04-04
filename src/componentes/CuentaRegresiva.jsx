import Lottie from "lottie-react";
import corazonAnim from "../assets/corazon.json";
import flores from "../assets/flores.png";

function CuentaRegresiva({ tiempo }) {
  // Extraemos el componente por si la librería viene como objeto
  const AnimacionLottie = Lottie.default || Lottie;

  return (
    <section className="cuenta">
      <img src={flores} className="flores-seccion" alt="Decoración flores" />

      <div className="caja-contador">
        <h2>Falta</h2>

        <div className="contador">
          <div className="item-tiempo">
            <span>{tiempo.dias}</span>
            <p>días</p>
          </div>
          <div className="item-tiempo">
            <span>{tiempo.horas}</span>
            <p>hs</p>
          </div>
          <div className="item-tiempo">
            <span>{tiempo.minutos}</span>
            <p>min</p>
          </div>
          <div className="item-tiempo">
            <span>{tiempo.segundos}</span>
            <p>seg</p>
          </div>
        </div>

        {/* Reemplazamos el 🤍 estático por el animado */}
        <div className="anim-corazon-contador">
          <AnimacionLottie 
            animationData={corazonAnim} 
            loop={true} 
            style={{ height: 80, filter: 'brightness(0) invert(1)'}} 
          />
        </div>
      </div>
    </section>
  );
}

export default CuentaRegresiva;