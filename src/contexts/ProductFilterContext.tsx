"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type ProductFilterContextType = {
  filter: string;
  setFilter: (value: string) => void;
};

const ProductFilterContext = createContext<
  ProductFilterContextType | undefined
>(undefined);

export function ProductFilterProvider({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState("");

  return (
    <ProductFilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </ProductFilterContext.Provider>
  );
}

export function useProductFilter() {
  const context = useContext(ProductFilterContext);
  if (!context) {
    throw new Error("");
  }
  return context;
}
