import axios from "axios";

const getToken = () => {
    let userFromLocalStorage = localStorage.getItem('auth');
    if (userFromLocalStorage) {
        userFromLocalStorage = JSON.parse(userFromLocalStorage);
        userFromLocalStorage = userFromLocalStorage.token;
    } else {
        userFromLocalStorage = null;
    }
    return userFromLocalStorage;
}

export const api_auth = axios.create({
    baseURL: 'https://vconnect-node.herokuapp.com/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${getToken()}`
    }
});

export const api = axios.create({
    baseURL: 'https://vconnect-node.herokuapp.com/',
    headers: {
        'Content-Type': 'application/json',
    }
});
