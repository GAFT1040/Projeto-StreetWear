"use client";

import ProductsCard from "@/components/ProductsArea";
import { DarkMode } from "@/components/ui/color-mode";
import {
  getCategories,
  getProductsByCategory,
} from "@/services/get.categories";
import { Category } from "@/types/categories";
import { Product } from "@/types/products";
import { Flex, Box, Button, Grid } from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Categories() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const params = useParams();
  const router = useRouter();

  const selectedCategory = params?.categoryId;

  const fetchCategories = async () => {
    const categoriesData = await getCategories();
    setCategories(categoriesData);
  };

  const fetchProducts = async (id: string) => {
    const numberId = Number(id);
    if (isNaN(numberId)) {
      const resp = await getProductsByCategory();
      setProducts(resp);
      return;
    }
    const filteredProducts = await getProductsByCategory(id);
    setProducts(filteredProducts);
  };
  useEffect(() => {
    fetchProducts(selectedCategory as string);
  }, [selectedCategory]);

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <Flex m="auto">
      <Box display={{ base: "none", md: "flex" }}>
        <Box
          w="200px"
          borderRight="1px solid #414141"
          p="2rem"
          boxShadow="2xl"
          backgroundColor="black"
        >
          <Button
            mb="1rem"
            w="100%"
            unstyled
            onClick={() => router.push(`/categories/all`)}
            color="white"
          >
            Todos
          </Button>
          {categories?.map((category) => (
            <Button
              mb="1rem"
              w="100%"
              unstyled
              key={category.id}
              onClick={() => router.push(`/categories/${category.id}`)}
              color="white"
            >
              {category.category_name}
            </Button>
          ))}
        </Box>
      </Box>

      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={10}
        p="2rem"
      >
        {products?.map((product) => (
          <ProductsCard key={product.name} {...product} />
        ))}
      </Grid>
    </Flex>
  );
}
