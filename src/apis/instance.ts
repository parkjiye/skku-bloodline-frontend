import axios, { AxiosError, AxiosResponse } from 'axios';

export const instance = axios.create({
    baseURL: 'http://43.201.134.147:8080/api',
});