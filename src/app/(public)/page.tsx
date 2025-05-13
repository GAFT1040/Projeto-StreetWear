"use client";

import Cart from "@/components/Cart";
import ProductsCard from "@/components/ProductsArea";
import { Provider } from "@/components/ui/provider";
import { getProductsService } from "@/services/get.products";
import { Product } from "@/types/products";
import {
  Box,
  Center,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { LightMode } from "@/components/ui/color-mode";
import { TbPointFilled } from "react-icons/tb";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const productsData = await getProductsService();
    setProducts(productsData);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

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
      <Box>
        <LightMode>
          <Box
            backgroundColor="blue.400"
            w="full"
            p={{
              base: "1rem 3rem 1rem 3rem",
              sm: " 4rem 8rem 4rem 8rem",
              xl: " 2rem 10rem 2rem 10rem",
            }}
          >
            <Center
              fontFamily="initial"
              fontSize="5rem"
              spaceY={12}
              justifyItems="center"
              mb={{ base: "none", sm: "1rem", xl: "2rem" }}
              display={{ base: " none", sm: "flex" }}
            >
              <Text color="blue.900">S</Text>
              <Text color="blue.300">W</Text>
            </Center>
            <Box as="ul" display="flex" justifyContent="space-between">
              <li>
                <Box display="flex" flexDir="column" gap="2">
                  <Heading>Contatos</Heading>

                  <Text color="white">Telefone:</Text>
                  <Text>(62) 99373-7258</Text>
                  <Text color="white">Email:</Text>
                  <Text>streetwear@gmail.com</Text>
                </Box>
              </li>

              <li>
                <Box
                  display={{ base: "none", sm: "flex", xl: "flex" }}
                  flexDir="column"
                  gap="2"
                >
                  <Heading>Mapa da Empresa</Heading>
                  <Link>
                    <TbPointFilled />
                    Sobre nós
                  </Link>
                  <Link>
                    <TbPointFilled />
                    Promoções
                  </Link>
                  <Link>
                    <TbPointFilled />
                    Distribuição
                  </Link>
                </Box>
              </li>

              <li>
                <Box flexDir="column" display={{ base: "none", md: "flex" }}>
                  <Heading>Mídias</Heading>
                  <Box
                    alignItems="center"
                    flexDir="column"
                    gap="4"
                    fontSize="1.7rem"
                    pt="1rem"
                    display={{ base: "none", sm: "flex", xl: "flex" }}
                  >
                    <Link>
                      <FaInstagram />
                    </Link>
                    <Link>
                      <BsTwitterX />
                    </Link>
                    <Link>
                      <FaWhatsapp />
                    </Link>
                    <Link>
                      <FaFacebookF />
                    </Link>
                  </Box>
                </Box>
              </li>
            </Box>
          </Box>
        </LightMode>
      </Box>
    </Provider>
  );
}
