import { api, api_auth } from "./index";

//POST
export const register = async (user) => {
    const { name, email, password, country } = user;
    try {
        const response = await api.post('/api/auth/register', { name, email, password, country });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const login = async (user) => {
    const { email, password } = user;
    console.log(email, password);
    try {
        const response = await api_auth.post('/api/auth/login', { email, password });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

//GET
export const getUser = async (userId) => {
    try {
        const response = await api_auth.get(`/api/user/${userId}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}