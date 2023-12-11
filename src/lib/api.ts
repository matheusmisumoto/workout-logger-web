import axios from 'axios';

export const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_FITLOGR_API_URL}/`,
});

export const apiWithAuth = (token?: string) => axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_FITLOGR_API_URL}/v1/`,
    headers: {
        'Authorization': `Bearer ${token}`,
    },
});