function EntradaMusica({ onConMusica, onSinMusica }) {
  return (
    <div className="pantalla-inicio">
      <div className="caja-inicio">
        <p className="bienvenida-texto">Bienvenidos a la invitación de</p>
        <h1 className="nombre-inicio">Josefina</h1>
        <hr className="linea-decorativa" />
        <h2 className="subtitulo-inicio">Mis XV años</h2>
        
        <p className="musica-aviso">La música de fondo es parte de la experiencia</p>
        
        <div className="botones-inicio">
          <button onClick={onConMusica} className="btn-inicio">
            Ingresar con música
          </button>
          <button onClick={onSinMusica} className="btn-inicio">
            Ingresar sin música
          </button>
        </div>
      </div>
    </div>
  );
}

export default EntradaMusica;