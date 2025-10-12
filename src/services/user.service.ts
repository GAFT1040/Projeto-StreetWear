import { RegisterUserData } from "@/types/auth";
import api from "./api";

export const updateUserService = async (id: number, data: RegisterUserData) => {
  const response = await api.patch(`/usuario/${id}`, data);
  return response.data;
};