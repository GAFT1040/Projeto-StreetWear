"use client";

import {
  Button,
  Flex,
  Link,
  Menu,
  MenuItem,
  Portal,
  Text,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import AuthButtonsMenu from "../MenuSing";
import Mark from "../Mark";
import Perfil from "../Perfil";
import CategoryButton from "../CategoryButton";

const MobileMenu = () => {
  const reloadPage = () => {
    window.location.href = "http://localhost:3000/";
  };
  return (
    <Menu.Root closeOnSelect={false}>
      <Menu.Trigger asChild>
        <IconButton background="transparent" color="blue.400">
          <FiMenu />
        </IconButton>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content
            as="ul"
            display="flex"
            flexDir="column"
            justifyItems="center"
          >
            <Menu.Item value="Shop" as="li">
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
            </Menu.Item>
            <Menu.Item value="Marca" as="li">
              <Mark />
            </Menu.Item>
            <Menu.Item value="Sobre-nós" as="li">
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
            </Menu.Item>
            <Menu.Item
              value="Lista de Produtos"
              display={{ base: "flex", sm: "none" }}
            >
              <CategoryButton />
            </Menu.Item>
            <Menu.Item value="Perfil" as="li">
              <Perfil />
            </Menu.Item>
            <AuthButtonsMenu />
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default MobileMenu;
