import { api, api_auth } from "./index";

//POST
export const create_post = async (data) => {
    const response = await api_auth.post('/api/post/create', data);
    return response.data;
}

export const get_posts = async () => {
    const response = await api_auth.get('/api/post/all?sortBy=createdAt:asc');
    return response.data;
}

export const get_posts_by_user = async (user_id) => {
    console.log(user_id);
    const response = await api_auth.get(`/api/post/user/${user_id}`);
    return response.data;
}