import './SnippedCard.css'; // Asegúrate de crear un archivo CSS con este nombre
import React from 'react';

const SnippedCard = ({ objeto, obj1,  icon, icon2 }:{
  objeto: string
  obj1: String
  icon: React.ReactElement
  icon2: React.ReactElement
}) => {
  return (
    <div className="SnippedCard-container">
      <button className="SnippedCard-boton">
        Agregar {objeto}
        <span className="SnippedCard-icono-circulo">
        <div className="SnippedCard-icon">
                {React.cloneElement(icon, { className: 'SnippedCard-icon' })}
            </div>
        </span>
      </button>
      <button className="SnippedCard-boton">
         {obj1}
        <span className="SnippedCard-icono-circulo">
        <div className="SnippedCard-icon">
                {React.cloneElement(icon2, { className: 'SnippedCard-icon' })}
            </div>
        </span>
      </button>
    </div>
  );
}

export default SnippedCard;
