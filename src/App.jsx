
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Inicio from './pages/inicio';
import Turnos from './pages/turnos';
import Citas from './pages/citas';
import Doctores from './pages/doctores';
import Pacientes from './pages/pacientes';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/turnos" element={<Turnos />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/doctores" element={<Doctores />} />
        <Route path="/pacientes" element={<Pacientes />} />
      </Routes>
    </Router>
  );
}

export default App;
