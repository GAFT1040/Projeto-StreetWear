"use client";

import Demo from "@/components/Cart";
import { Provider } from "@/components/ui/provider";
import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Provider>
      <Demo />
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

      <Heading fontSize="2rem" fontFamily="Arial" p="2rem" color="blue.400">
        Destaques
      </Heading>
    </Provider>
  );
}
