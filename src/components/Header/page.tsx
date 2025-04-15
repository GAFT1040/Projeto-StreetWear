"use client";

import { Box, Button, Flex, Heading, Image, Link } from "@chakra-ui/react";
import { Provider } from "../ui/provider";
import { ColorModeButton } from "../ui/color-mode";

const Header = () => {
  return (
    <Provider>
      <Flex
        flexDir="row"
        justifyContent="space-between"
        p="1rem"
        boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px;"
      >
        <Image />
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
            <Link href="/" _hover={{ color: "#4affb4" }}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/" _hover={{ color: "#4affb4" }}>
              Lista de estoques
            </Link>
          </li>
          <li>
            <Link href="/" _hover={{ color: "#4affb4" }}>
              Sobre nós
            </Link>
          </li>
          <li>
            <Link href="/" _hover={{ color: "#4affb4" }}>
              Descontos
            </Link>
          </li>
        </Box>
        <Box>
          <ColorModeButton p="0 3rem 0 0" background="transparent" />
          <Button size="lg" variant="outline">
            Carrinho
          </Button>
        </Box>
      </Flex>
    </Provider>
  );
};

export default Header;
