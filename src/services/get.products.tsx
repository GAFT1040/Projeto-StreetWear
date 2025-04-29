import api from "./api";

export const getProductsService = async () => {
  const response = await api.get("/products");
  return response.data;
};
