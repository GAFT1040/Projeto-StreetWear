"use client";

import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import { Provider } from "../ui/provider";
import { ColorModeButton } from "../ui/color-mode";

const Header = () => {
  return (
    <Provider>
      <Flex
        flexDir="row"
        justifyContent="space-between"
        p="1rem"
        _light={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        _dark={{ boxShadow: " rgba(255, 255, 255, 0.030) 0px 3px 8px" }}
      >
        <Heading
          fontFamily="initial"
          fontSize="2rem"
          alignContent="center"
          color="green.300"
        >
          SW
        </Heading>
        <Box
          as="ul"
          display="flex"
          flexDir="row"
          gap="2rem"
          fontFamily="monospace"
          fontSize="1rem"
          alignItems="center"
          cursor="pointer"
        >
          <li>
            <Link href="/" _hover={{ color: "green.300" }}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/" _hover={{ color: "green.300" }}>
              Lista de estoques
            </Link>
          </li>
          <li>
            <Link href="/" _hover={{ color: "green.300" }}>
              Sobre nós
            </Link>
          </li>
          <li>
            <Link href="/" _hover={{ color: "green.300" }}>
              Descontos
            </Link>
          </li>
        </Box>
        <Box display="flex" gap="1rem">
          <ColorModeButton p="0 3rem 0 0" background="transparent" />
          <Button size="lg" variant="outline">
            <Link href="/register" outlineColor="transparent">
              Registrar-se
            </Link>
          </Button>
          <Button
            size="lg"
            border="1px solid "
            borderColor="green.300"
            backgroundColor="green.300"
            color="white"
          >
            <Link href="/login" outlineColor="transparent">
              Entrar
            </Link>
          </Button>
        </Box>
      </Flex>
    </Provider>
  );
};

export default Header;
