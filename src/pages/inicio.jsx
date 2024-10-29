import React from 'react';

const Inicio = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Bievenido </h1>
      <p className="text-lg text-gray-700 text-center max-w-xl mb-8">
        Bienvenido a nuestra aplicación de turnos y citas médicas. Gestiona tus citas de manera rápida y sencilla desde la comodidad de tu hogar.
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-xs text-center">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Servicios</h2>
          <p className="text-gray-600">Ofrecemos una amplia gama de servicios médicos para satisfacer tus necesidades de salud.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 max-w-xs text-center">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Beneficios</h2>
          <p className="text-gray-600">Acceso a médicos de confianza y una plataforma fácil de usar para gestionar tus citas.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 max-w-xs text-center">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Doctores</h2>
          <p className="text-gray-600">Revisa una breve reseña de nuestros doctores los mejores importados desde cuba .</p>
        </div>
      </div>

      <button className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
        Agendar una Cita
      </button>
    </div>
  );
};

export default Inicio;
