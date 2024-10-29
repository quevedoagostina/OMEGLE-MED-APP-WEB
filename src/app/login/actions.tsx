// src/login/actions.ts
import login from '../../utils/apiClient';

export async function loginUser(username: string, password: string) {
    try {
        const response = await login( username, password);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Invalid login credentials');
        }
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
}
