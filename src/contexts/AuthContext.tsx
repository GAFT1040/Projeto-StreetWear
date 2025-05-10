"use client";
import {
  AuthContextInterface,
  LoginUserData,
  RegisterUserData,
} from "@/types/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { loginUserService, registerUserService } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { User } from "@/types/usuarios";
import api from "@/services/api";
import { getUser } from "@/services/get.users";

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoged, setIsLoged] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("@token");
    const userId = localStorage.getItem("@userId");

    const fetchData = async () => {
      if (token) {
        setIsLoged(true);
        api.defaults.headers.common["Authorization"] =
          `Bearer ${JSON.parse(token)}`;
      }
      if (userId) {
        const response = await getUser(Number(JSON.parse(userId)));
        setUser(response);
      }
    };

    fetchData();
  }, []);

  const registerUser = async (data: RegisterUserData) => {
    try {
      const response = await registerUserService(data);
      router.push("/login");
      toast.success("Registro bem sucedido!");
    } catch (error: any) {
      console.log(error.response);

      toast.error(error.response.data);
    }
  };

  const loginUser = async (data: LoginUserData) => {
    try {
      const response = await loginUserService(data);
      localStorage.setItem("@token", JSON.stringify(response.accessToken));
      localStorage.setItem("@userId", JSON.stringify(response.user.id));
      setIsLoged(true);
      router.push("/");
      toast.success("Login bem sucedido!");
      console.log(response);
    } catch (error: any) {
      toast.error(error.response.data);
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ registerUser, loginUser, user, isLoged }}>
      {" "}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
