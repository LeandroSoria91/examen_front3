import React, { useState } from 'react';
import Card from './Components/Card'

function App() {
  const [nombre, setNombre] = useState('');
  const [equipo, setEquipo] = useState('');
  const [nombreError, setNombreError] = useState('');
  const [equipoError, setEquipoError] = useState('');
  const [generalError, setGeneralError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre.trim().length < 3 || nombre.trim().startsWith(' ')) {
      setNombreError('El nombre debe tener al menos 3 caracteres y no debe empezar con un espacio en blanco.');
      setGeneralError('Por favor chequea que la información sea correcta.');
      return;
    } else {
      setNombreError('');
    }

    if (equipo.length < 6) {
      setEquipoError('El equipo debe tener al menos 6 caracteres.');
      setGeneralError('Por favor chequea que la información sea correcta.');
      return;
    } else {
      setEquipoError('');
    }

    setGeneralError('');
    console.log('Nombre:', nombre);
    console.log('Equipo:', equipo);
  };

  return (
    <div className="App">
      <h1>Jugadores de Fútbol</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre del Jugador:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          {nombreError && <p className="error">{nombreError}</p>}
        </div>
        <div>
          <label htmlFor="equipo">Equipo:</label>
          <input
            type="text"
            id="equipo"
            value={equipo}
            onChange={(e) => setEquipo(e.target.value)}
            required
          />
          {equipoError && <p className="error">{equipoError}</p>}
        </div>
        {generalError && <p className="error">{generalError}</p>}
        <button onClick={handleSubmit}>Jugador</button>     
      </form>
    </div>
  );
  }
export default App;