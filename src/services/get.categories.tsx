import api from "./api";

export const getCategories = async () => {
  const response = await api.get("/categories");
  return response.data;
};

export const getProductsByCategory = async (id?: string) => {
  const response = await api.get(`/products/${id ? `?categoryId=${id}` : ""}`);
  return response.data;
};
