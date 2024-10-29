import React, { useState } from 'react';

const Doctores = () => {
  const [reseñas, setReseñas] = useState({});

  const doctores = [
    { id: 1, nombre: 'Dr. Juan Pérez', descripcion: 'Especialista en Cardiología', imagen: 'ruta/a/imagen1.jpg' },
    { id: 2, nombre: 'Dra. Ana García', descripcion: 'Especialista en Pediatría', imagen: 'ruta/a/imagen2.jpg' },
    // Agrega más doctores según necesites
  ];

  const manejarReseña = (id, textoReseña) => {
    setReseñas(prev => ({ ...prev, [id]: textoReseña }));
  };

  return (
    <div>
      <h1>Doctores</h1>
      <div className="doctor-list">
        {doctores.map(doctor => (
          <div key={doctor.id} className="doctor-card">
            <img src="" alt={`Imagen de ${doctor.nombre}`} className="doctor-img" />
            <h2>{doctor.nombre}</h2>
            <p>{doctor.descripcion}</p>
            <div className="reseña">
              <textarea
                placeholder="Deja una reseña"
                value={reseñas[doctor.id] || ''}
                onChange={e => manejarReseña(doctor.id, e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctores;
