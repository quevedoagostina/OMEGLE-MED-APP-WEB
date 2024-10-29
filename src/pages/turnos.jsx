import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Turnos = () => {
  const [date, setDate] = useState(new Date());
  const [turnos, setTurnos] = useState([]);

  const agendarTurno = () => {
    const nuevoTurno = { id: Date.now(), fecha: date.toLocaleDateString() };
    setTurnos(prevTurnos => [...prevTurnos, nuevoTurno]);
  };

  return (
    <div>
      <h1>Turnos</h1>
      <p>Aquí puedes gestionar los turnos de pacientes.</p>

      <div className="calendario-container">
        <Calendar onChange={setDate} value={date} />
        <button onClick={agendarTurno} className="btn-agendar">
          Agendar turno para {date.toLocaleDateString()}
        </button>
      </div>

      <div className="turnos-agendados">
        <h2>Turnos Agendados</h2>
        <ul>
          {turnos.map(turno => (
            <li key={turno.id}>Turno para el {turno.fecha}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Turnos;
