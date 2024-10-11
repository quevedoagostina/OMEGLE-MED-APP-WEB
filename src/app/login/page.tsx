'use client'

import React, { useState } from 'react';
import { ZodError, z } from 'zod'; 
import LoginForm from '../../Components/Recipes/Login';

const loginSchemaUsername = z.object({
    username: z.string().min(1, { message: "Username is required" }),
    password: z.string().min(1, { message: "Password is required" }),
});

export default function LoginPage() { 
    const [errors, setErrors] = useState({ username: '', password: '' });

    const onSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        try {
            loginSchemaUsername.parse({ username, password });
            setErrors({ username: '', password: '' });
            console.log("Login exitoso", { username, password });
        } catch (error) {
            if (error instanceof ZodError) {
                const fieldErrors = { username: '', password: '' };

                error.errors.forEach((err) => {
                    if (err.path[0] === 'username') {
                        fieldErrors.username = err.message;
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
                <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h1>
                <LoginForm onSubmit={onSubmit} errors={errors} />
            </div>
        </div>    
    );
}
