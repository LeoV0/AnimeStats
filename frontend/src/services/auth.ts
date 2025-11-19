import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const api = axios.create({
  baseURL: `${API_URL}/auth`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export async function registerUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    const response = await api.post("/register", data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }
    throw new Error("Erreur inattendue");
  }
}

export async function loginUser(data: { email: string; password: string }) {
  try {
    const response = await api.post("/login", data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }
    throw new Error("Erreur inattendue");
  }
}
