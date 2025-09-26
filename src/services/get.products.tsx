import api from "./api";

export const getProductsService = async () => {
  const response = await api.get("/produto/");
  return response.data;
};
