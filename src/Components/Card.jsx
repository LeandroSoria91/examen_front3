import React from 'react';

const Card= ({ jugador }) => {
  return (
    <div >
      <h3>{jugador.nombre}</h3>
      <h4>{jugador.equipo}</h4>
      <button>Ficho</button>
    </div>
  );
}

export default Card;