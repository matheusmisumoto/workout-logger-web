import axios from 'axios';
import { cookies, headers } from 'next/headers';

export const api = axios.create({
    baseURL: 'http://localhost:8080/',
});

export const apiWithAuth = axios.create({
    baseURL:'http://localhost:8080/v1/',
});