import '/dist/output.css';
import React, { useState } from 'react';
import RegisterForm from '../../Components/Recipes/RegisterForm'; 
import { z, ZodError } from 'zod';

const RegisterPage: React.FC = () => {
    const [errors, setErrors] = useState({ username: '', email: '', password: '' });
    const registerSchema = z.object({
        username: z.string().min(1, { message: "Username is required" }),
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(1, { message: "Password is required" }),
    });
    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;

        try {
            registerSchema.parse({ username, email, password });
            setErrors({ username: '', email: '', password: '' });
            const storedUsers = localStorage.getItem('users');
            const users = storedUsers ? JSON.parse(storedUsers) : [];
            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            console.log("Registro exitoso", { username, email, password });
            e.currentTarget.reset();

        } catch (error) {
            if (error instanceof ZodError) {
                const fieldErrors = { username: '', email: '', password: '' };

                error.errors.forEach((err) => {
                    if (err.path[0] === 'username') {
                        fieldErrors.username = err.message;
                    } else if (err.path[0] === 'email') {
                        fieldErrors.email = err.message;
                    } else if (err.path[0] === 'password') {
                        fieldErrors.password = err.message;
                    }
                });

                setErrors(fieldErrors);
            }
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 shadow-md rounded-lg">
                <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Register</h1>
                <RegisterForm onSubmit={handleRegister} errors={errors} />
            </div>
        </div>
    );
};

export default RegisterPage;
