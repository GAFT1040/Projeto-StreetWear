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

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

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
      router.push("/");
      toast.success("Login bem sucedido!");
      console.log(response);
    } catch (error: any) {
      toast.error(error.response.data);
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ registerUser, loginUser }}>
      {" "}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
