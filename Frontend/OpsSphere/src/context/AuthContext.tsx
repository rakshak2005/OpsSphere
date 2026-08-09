import React, { createContext, useContext, useState, useEffect } from "react";
import type { User } from "../types/auth.types";
import { AuthService } from "../services/auth.service";

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string, secretCode: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("opssphere_user_session");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("opssphere_jwt_token");
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const initAuth = async () => {
      if (token) {
        try {
          const currentUser = await AuthService.getCurrentUser();
          setUser(currentUser);
          localStorage.setItem("opssphere_user_session", JSON.stringify(currentUser));
        } catch (error: any) {
          
          console.warn("Session verification warning:", error?.message);
        }
      }
      setIsLoading(false);
    };

    initAuth();
  }, [token]);

  const login = async (email: string, password: string, secretCode: string) => {
    const data = await AuthService.login(email, password, secretCode);
    setUser(data.user);
    setToken(data.token);
    localStorage.setItem("opssphere_jwt_token", data.token);
    localStorage.setItem("opssphere_user_session", JSON.stringify(data.user));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("opssphere_jwt_token");
    localStorage.removeItem("opssphere_user_session");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user && !!token,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
