"use client";

import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import { Provider } from "../ui/provider";
import { ColorModeButton } from "../ui/color-mode";
import AuthButtons from "../Buttom";
import Demo from "../Menu";
import Mark from "../Mark";
import About from "../MoreAbout";

const Header = () => {
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <Provider>
      <Flex
        flexDir="row"
        justifyContent="space-between"
        p="1rem"
        _light={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        _dark={{ boxShadow: " rgba(255, 255, 255, 0.030) 0px 3px 8px" }}
        position="sticky"
        top="0"
        zIndex="5"
        background={{ _dark: "black", _light: "white" }}
      >
        <Button backgroundColor="transparent" onClick={reloadPage}>
          <Heading
            fontFamily="initial"
            fontSize="2rem"
            alignContent="center"
            color="blue.400"
          >
            <p>S</p>
            <p>W</p>
          </Heading>
        </Button>
        <Box
          as="ul"
          display={{ base: "none", sm: "flex" }}
          flexDir="row"
          gap={{ base: "1rem", md: "2rem" }}
          fontSize="1rem"
          alignItems="center"
          cursor="pointer"
        >
          <li>
            <Box display={{ base: "none", md: "flex" }}>
              <About />
            </Box>
          </li>
          <li>
            <Link
              href="#shop"
              _hover={{
                backgroundColor: "blue.400",
                color: "orange.100",
              }}
              display={{ base: "none", md: "flex" }}
              color="blue.400"
            >
              Shop
            </Link>
          </li>
          <li>
            <Mark />
          </li>
        </Box>
        <Flex alignItems="center">
          <ColorModeButton
            p="0 2rem 0 2rem"
            background="transparent"
            color="blue.400"
          />
          <Box
            display={{ base: "flex", md: "none" }}
            justifyContent="center"
            alignItems="center"
          >
            <Demo />
          </Box>
          <Box display={{ base: "none", md: "flex" }}>
            <AuthButtons />
          </Box>
        </Flex>
      </Flex>
    </Provider>
  );
};

export default Header;
