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
import { getUser } from "@/services/get.users";
import api from "@/services/api";

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const registerUser = async (data: RegisterUserData) => {
    try {
      const response = await registerUserService(data);
      router.push("/login");
    } catch (error: any) {
      console.log(error.response);

      toast.error(error.response.data);
    }
  };

  const loginUser = async (data: LoginUserData) => {
    try {
      const response = await loginUserService(data);
      router.push("/");
      localStorage.setItem("@token", JSON.stringify(response.accessToken));
      toast.success("Login bem sucedido!");
    } catch (error: any) {
      toast.error(error.response.data);
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
