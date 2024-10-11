import './input.css';
import '../dist/output.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="text-center mb-8">
        <img src="/vite.svg" className="h-16 mb-4" alt="Omegle logo" />
        <h1 className="text-3xl font-bold text-red-800">Bienvenido a Omegle</h1>
        <p className="text-gray-600 mt-2">Tu solución para gestionar turnos médicos de manera rápida y sencilla.</p>
      </header>

      <main className="flex flex-col items-center space-y-8">
        <section className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Qué te gustaría hacer?</h2>
          <div className="flex justify-center">
            <a
              href="/login"
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Iniciar sesión
            </a>
          </div>
        </section>

        <section className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sobre Omegle</h2>
          <p className="text-gray-600">
            Omegle es una plataforma diseñada para facilitar la gestión de turnos médicos. Puedes agendar, consultar o modificar
            tus turnos, todo en un solo lugar. Únete a nuestra comunidad y gestiona tus citas de manera eficiente.
          </p>
        </section>
      </main>

      <footer className="text-center mt-8 text-gray-600">
        <p>&copy; 2024 Omegle. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
