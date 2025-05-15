"use client";

import { getProductsService } from "@/services/get.products";
import { Product } from "@/types/products";
import React, { createContext, useContext, useState } from "react";

interface PushItensContext {
  products: Product[];
  getProductById: (id: number) => Product | undefined;
}

const PushItens = createContext<PushItensContext>({} as PushItensContext);

const IntensProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const fethProducts = async () => {
    const productsData = await getProductsService();
    setProducts(productsData);
  };

  const getProductById = (id: number) => {
    return products.find((product) => product.id === id);
  };

  return (
    <PushItens.Provider value={{ products, getProductById }}>
      {children}
    </PushItens.Provider>
  );
};

export const UseProducts = () => {
  const context = useContext(PushItens);
  if (!context) throw new Error("Produtos não disponível no moment");
  return context;
};

export default IntensProvider;
