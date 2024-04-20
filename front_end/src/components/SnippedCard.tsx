import './SnippedCard.css'; // Asegúrate de crear un archivo CSS con este nombre

const SnippedCard = () => {
  return (
    <div className="SnippedCard-container">
      <button className="SnippedCard-boton">
        Agregar Distribuidor
        <span className="SnippedCard-icono-circulo">
          <i className="fas fa-plus"></i> {/* Icono de ejemplo */}
        </span>
      </button>
      <button className="SnippedCard-boton">
        Filtrar
        <span className="SnippedCard-icono-circulo">
          <i className="fas fa-filter"></i> {/* Icono de ejemplo */}
        </span>
      </button>
      <button className="SnippedCard-boton">
        Filtrar
        <span className="SnippedCard-icono-circulo">
          <i className="fas fa-filter"></i> {/* Icono de ejemplo */}
        </span>
      </button>
    </div>
  );
}

export default SnippedCard;
