import api from "./api";
import { PedidoCreateDto } from "@/types/pedido.dt";

export const createPedidoService = async (produtos: PedidoCreateDto[]) => {
  const response = await api.post("/pedido/", { produtos });
  return response.data;
};

