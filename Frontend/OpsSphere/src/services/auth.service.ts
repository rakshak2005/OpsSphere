import { apiClient } from "./api";
import type { AuthResponse, User } from "../types/auth.types";

export const AuthService = {
  login: async (email: string, password: string, secretCode: string): Promise<AuthResponse> => {
    const response = await apiClient.post<{ success: boolean; data: AuthResponse }>(
      "/auth/login",
      { email, password, secretCode }
    );
    return response.data.data;
  },

  getCurrentUser: async (): Promise<User> => {
    const response = await apiClient.get<{ success: boolean; data: User }>("/auth/me");
    return response.data.data;
  },

  registerUser: async (userData: {
    name: string;
    email: string;
    password: string;
    role: string;
    secretCode: string;
  }): Promise<User> => {
    const response = await apiClient.post<{ success: boolean; data: User }>(
      "/users",
      userData
    );
    return response.data.data;
  },
};
