/* eslint-disable react/prop-types */
import '/dist/output.css'; 
import React, { useState } from 'react';

interface LoginFormProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void; 
    errors: { username: string; password: string }; 
    onLoginSuccess: () => void; 
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, errors, onLoginSuccess }) => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;

        const storedUsers = localStorage.getItem('users');
        const users = storedUsers ? JSON.parse(storedUsers) : [];
        const user = users.find((user: { username: string; password: string }) => user.username === username && user.password === password);

        if (user) {
            setSuccessMessage('Inicio de sesión exitoso');
            setTimeout(() => {
                setSuccessMessage('');
                onLoginSuccess(); 
            }, 2000); 
        } else {
            setSuccessMessage('');
            errors.username = 'Usuario o contraseña incorrectos';
            errors.password = 'Usuario o contraseña incorrectos';
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {successMessage && <p className="text-green-500 text-sm mb-4">{successMessage}</p>}
            <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                />
                {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
            >
                Iniciar sesión
            </button>
        </form>
    );
}

export default LoginForm;
