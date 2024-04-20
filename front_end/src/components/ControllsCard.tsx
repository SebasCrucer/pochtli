import './ControlsCard.css'; // Asegúrate de crear un archivo CSS con este nombre
import React from 'react';

export const ControlsCard = ( { title, cantidad, fecha, icon, color, color2 }:{
    title :string,
    cantidad: number,
    fecha: string,
    icon: React.ReactElement,
    color: string,
    color2: string
}) => {
  return (
    <div className="ControlsCard" style={{
        backgroundColor: color2
    }}>
        <div className='ControlsCard-Description'>
            <p className="ControlsCard-titulo">Total <b>{title}</b></p>
            <p className="ControlsCard-numero">{cantidad}</p>
        </div>
        <div className="ControlsCard-icon" style={{fill: color}}>
                {React.cloneElement(icon, { className: 'ControlsCard-icon' })}
            </div>
      <p className="ControlsCard-actualizacion">Última actualización: {fecha}</p>
    </div>
  );
}


