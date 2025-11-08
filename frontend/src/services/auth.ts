import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/auth",
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
