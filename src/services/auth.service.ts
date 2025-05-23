import { LoginUserData, RegisterUserData } from "@/types/auth";
import api from "./api";

export const registerUserService = async (data: RegisterUserData) => {
  const response = await api.post("/register", data);
  return response.data;
};

export const loginUserService = async (data: LoginUserData) => {
  //http://localhost:3002/login
  const response = await api.post("/login", data);
  return response.data;
};
