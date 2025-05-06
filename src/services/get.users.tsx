import api from "./api";

export const getUser = async (id: number) => {
  const response = await api.get(`users/${id}`);
  return response.data;
};
