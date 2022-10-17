import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

export const authApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: Boolean(localStorage.getItem("JWT"))
      ? `Bearer ${localStorage.getItem("JWT")}`
      : undefined,
    "Content-Type": "application/json",
  },
});

const api = axios.create({
  baseURL: BASE_URL,
});

export const request = ({ ...options }) => {
  return api(options)
    .then((response) => response)
    .catch((error) => error);
};
