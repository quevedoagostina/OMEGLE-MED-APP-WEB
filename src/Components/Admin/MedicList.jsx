import React, { useState, useEffect } from 'react';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchDoctors();
  }, []);

  // Función para obtener los médicos desde la API
  const fetchDoctors = async () => {
    const response = await fetch('/api/doctors');
    const data = await response.json();
    setDoctors(data);
  };

  // Función para filtrar los médicos
  const filteredDoctors = doctors.filter(doctor => 
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Lista de Médicos</h2>
      <input
        type="text"
        placeholder="Buscar por nombre o especialidad"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Especialidad</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredDoctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.name}</td>
              <td>{doctor.specialty}</td>
              <td>{doctor.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorList;
