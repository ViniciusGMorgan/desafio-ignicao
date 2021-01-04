import axios from "axios";
import { Auth } from "../config/storage";

const api = axios.create({
  headers: {
    "Access-Control-Allow-Origin": process.env.REACT_APP_API,
  },
  baseURL: process.env.REACT_APP_API,
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem(Auth)
    ? JSON.parse(sessionStorage.getItem(Auth)).accessToken
    : "";
  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return { ...config, headers };
});

export default api;
