import React, { useState, useEffect } from 'react';

const PatientManagement = () => {
  const [patients, setPatients] = useState([]);
  const [newPatient, setNewPatient] = useState({ name: '', age: '', email: '' });
  const [editingPatient, setEditingPatient] = useState(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    const response = await fetch('/api/patients');
    const data = await response.json();
    setPatients(data);
  };

  const handleChange = (e) => {
    setNewPatient({
      ...newPatient,
      [e.target.name]: e.target.value,
    });
  };

  const addPatient = async () => {
    const response = await fetch('/api/patients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPatient),
    });
    if (response.ok) {
      fetchPatients();
      setNewPatient({ name: '', age: '', email: '' });
    }
  };

  const updatePatient = async () => {
    const response = await fetch(`/api/patients/${editingPatient.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editingPatient),
    });
    if (response.ok) {
      fetchPatients();
      setEditingPatient(null);
    }
  };

  const deletePatient = async (id) => {
    const response = await fetch(`/api/patients/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      fetchPatients();
    }
  };

  return (
    <div>
      <h2>Administrar Pacientes</h2>
      <form onSubmit={(e) => { e.preventDefault(); editingPatient ? updatePatient() : addPatient(); }}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={editingPatient ? editingPatient.name : newPatient.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Edad"
          value={editingPatient ? editingPatient.age : newPatient.age}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={editingPatient ? editingPatient.email : newPatient.email}
          onChange={handleChange}
        />
        <button type="submit">{editingPatient ? 'Actualizar' : 'Agregar'} Paciente</button>
      </form>

      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {patient.name} - {patient.age} años - {patient.email}
            <button onClick={() => setEditingPatient(patient)}>Editar</button>
            <button onClick={() => deletePatient(patient.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientManagement;
