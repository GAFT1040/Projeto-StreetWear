"use client";

import Cart from "@/components/Cart";
import ProductsCard from "@/components/ProductsArea";
import { Provider } from "@/components/ui/provider";
import { getProductsService } from "@/services/get.products";
import { Product } from "@/types/products";
import { Box, Center, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const productsData = await getProductsService();
    setProducts(productsData);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Provider>
      <Cart />
      <Center
        style={{
          backgroundImage: `url(/roupasHome.png)`,
          backgroundSize: "auto",
          backgroundPosition: "center",
        }}
        w="auto"
        h="200px"
      >
        <Text color="white" fontSize="4rem" fontFamily="initial">
          STREET WEAR
        </Text>
      </Center>
      <Box
        as="ul"
        display={{ base: "none", md: "flex" }}
        flexDir="row"
        m="4rem"
        gap="1rem"
      >
        <li>
          <Image
            borderRadius="30px"
            src="https://cdn.awsli.com.br/1605/1605630/arquivos/16-7.jpg"
          />
        </li>
        <li>
          <Image
            borderRadius="30px"
            scale="1.1"
            src="https://cdn.awsli.com.br/1605/1605630/arquivos/16-5.jpg"
          />
        </li>
        <li>
          <Image
            borderRadius="30px"
            src="https://cdn.awsli.com.br/1605/1605630/arquivos/16-2.jpg"
          />
        </li>
      </Box>
      <Box backgroundColor="gray.950" m="2rem" borderRadius="30px">
        <Heading
          fontSize="2rem"
          fontFamily="Arial"
          p="2rem"
          color="white"
          id="shop"
        >
          StreetWear Shop
        </Heading>
        <Box p="2rem">
          <Grid
            p={{ base: "0", xl: "0 5rem 0 5rem" }}
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",

              md: "repeat(2, 1fr)",

              xl: "repeat(3, 1fr)",
            }}
            gap="7rem"
          >
            {products?.map((product, index) => (
              <ProductsCard key={product.id} {...product} />
            ))}
          </Grid>
        </Box>
      </Box>
    </Provider>
  );
}
