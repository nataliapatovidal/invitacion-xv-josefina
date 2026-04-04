function Portada() {
  return (
    <section className="portada">
      <div className="particulas"></div>
      
      {/* Mantenemos tu imagen de siempre */}
      <img src="/fondo-estrellas.png" className="fondo-curva" alt="" />

      <div className="contenido">
        <p className="fecha-portada">20.06.2026</p>
        
        {/* Aquí el toque de las líneas al costado del nombre */}
        <div className="marco-nombre">
          <hr className="linea-nombre" />
          <h1>Josefina</h1>
          <hr className="linea-nombre" />
        </div>

        <h2>Mis XV años</h2>

        <p className="texto-invitacion">
          Te espero para compartir la alegría de esa noche que será para mí
          mágica, inolvidable y única.
        </p>
      </div>
    </section>
  );
}
export default Portada;