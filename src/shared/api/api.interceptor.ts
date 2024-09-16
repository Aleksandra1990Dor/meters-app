import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL ?? '';

export const axiosClassic = axios.create({
  baseURL: SERVER_URL,
  headers: { 'Content-Type': 'application/json', referrerPolicy: 'unsafe-url' },
});
