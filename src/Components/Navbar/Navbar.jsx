import React from "react";


const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <a href="/">Citas Omegle</a>
        </div>
    
        {/* Menu items */}
        <ul className="flex space-x-6 text-white">
          <li>
            <a href="/inicio" className="hover:text-gray-300">
              Inicio
            </a>
          </li>
          <li>
            <a href="/doctores" className="hover:text-gray-300">
              doctores
            </a>
          </li>
          <li>
            <a href="/pacientes" className="hover:text-gray-300">
              pacientes
            </a>
          </li>
          <li>
            <a href="/citas" className="hover:text-gray-300">
              citas
            </a>
          </li>
          <li>
            <a href="/turnos" className="hover:text-gray-300">
              Admin
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
