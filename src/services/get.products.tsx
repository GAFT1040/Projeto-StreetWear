import { ProductsUserData } from "@/types/auth";
import api from "./api";

export const getProductsService = async (data: ProductsUserData) => {
  const response = await api.get("/products");
  return response.data;
};
