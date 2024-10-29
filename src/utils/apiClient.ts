import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5173';

export default async function login (username: string, password: string) {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password });
        return response.data;
    } catch (error) {
        throw new Error('Error en el inicio de sesión');
    }
};
