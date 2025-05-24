"use client";

import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { Provider } from "../ui/provider";
import { ColorModeButton } from "../ui/color-mode";
import AuthButtons from "../Buttom";
import Mark from "../Mark";
import CategoryButton from "../CategoryButton";
import MobileMenu from "../Menu";

const Header = () => {
  const reloadPage = () => {
    window.location.href = "http://localhost:3000/";
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
        <Button backgroundColor="transparent">
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
              <Button
                variant="outline"
                backgroundColor="transparent"
                borderColor="transparent"
              >
                <Link href="/AboutUs">
                  <Text
                    _hover={{
                      backgroundColor: "blue.400",
                      color: "orange.100",
                    }}
                    color="blue.400"
                    fontWeight="normal"
                    fontSize="1rem"
                  >
                    Sobre Nós
                  </Text>
                </Link>
              </Button>
            </Box>
          </li>
          <li>
            <Box display={{ base: "none", md: "flex" }}>
              <Button
                size="sm"
                variant="outline"
                backgroundColor="transparent"
                borderColor="transparent"
                onClick={reloadPage}
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
                  Home
                </Text>
              </Button>
            </Box>
          </li>
          <li>
            <Box display={{ base: "none", md: "flex" }}>
              <Mark />
            </Box>
          </li>
          <li>
            <CategoryButton />
          </li>
        </Box>
        <Flex alignItems="center">
          <ColorModeButton
            p="0 2rem 0 2rem"
            background="transparent"
            color="blue.400"
          />
          <Box
            display={{ base: "flex", lg: "none" }}
            justifyContent="center"
            alignItems="center"
          >
            <MobileMenu />
          </Box>
          <Box display={{ base: "none", lg: "flex" }}>
            <AuthButtons />
          </Box>
        </Flex>
      </Flex>
    </Provider>
  );
};

export default Header;
