import './SnippedCard.css'; // Asegúrate de crear un archivo CSS con este nombre
import React from 'react';

const SnippedCard = ({ actions }: {
  actions: {
    name: string,
    icon: React.ReactElement,
    color: string,
    onClick: () => void
  }[]
}) => {
  return (
    <div className="SnippedCard-container">
      {
        actions.map(({ name, icon, onClick, color }, i) => (
          <button key={i} className="SnippedCard-boton" onClick={onClick}>
            {name}
            <span className="SnippedCard-icono-circulo" style={{
              backgroundColor: color
            }}>
              <div className="SnippedCard-icon">
                {React.cloneElement(icon, { className: 'SnippedCard-icon' })}
              </div>
            </span>
          </button>
        ))
      }
    </div>
  );
}

export default SnippedCard;
