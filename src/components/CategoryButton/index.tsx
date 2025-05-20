"use client";
import { getCategories } from "@/services/get.categories";
import { getProductsService } from "@/services/get.products";
import { Category } from "@/types/categories";
import { Product } from "@/types/products";
import { Button, Link, Menu, Portal, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const CategoryButton = () => {
  const [categories, setCategories] = useState<Category[]>([]); //estado do componente
  const [products, setProducts] = useState<Product[]>([]); //estado do componente

  const fetchCategories = async () => {
    const categoriesData = await getCategories();
    setCategories(categoriesData);
  };

  const fetchProducts = async () => {
    const productsData = await getProductsService();
    setProducts(productsData);
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const [state, setState] = useState();
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          size="sm"
          variant="outline"
          backgroundColor="transparent"
          borderColor="transparent"
        >
          <Text
            _hover={{
              backgroundColor: "blue.400",
              color: "orange.100",
            }}
            color="blue.400"
            fontWeight="normal"
            fontSize="1rem"
          >
            Lista de Estoque
          </Text>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {categories.map((item, index) => (
              <Menu.Item key={index} asChild value={item.category_name}>
                <Link href={`/categories/${item.id}`}>
                  <Text> {item.category_name} </Text>
                </Link>
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default CategoryButton;
