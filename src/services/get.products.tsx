import api from "./api";

export const getProductsService = async () => {
  const response = await api.get("/produtos");
  return response.data;
};
