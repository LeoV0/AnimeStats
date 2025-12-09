const API_URL = import.meta.env.VITE_API_URL;

const getToken = () => localStorage.getItem("jwt_token");

export const api = async (endpoint: string, options: RequestInit = {}) => {
  const token = getToken();

  const headers = new Headers(options.headers || {});
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  headers.set("Content-Type", "application/json");

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
    credentials: "include",
  });

  if (response.status === 401) {
    localStorage.removeItem("jwt_token");
  }

  return response;
};
