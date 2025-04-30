"use client";

import { Box, Button, HStack, Input, InputGroup, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import Perfil from "../Perfil";

export default function AuthButtons() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <HStack>
      {!isLoggedIn && (
        <Box display="flex" gap="1rem" id="Sing-pages">
          <Button size="lg" variant="outline">
            <Link href="/register" outlineColor="transparent">
              Registrar-se
            </Link>
          </Button>
          <Button
            size="lg"
            border="1px solid "
            borderColor="blue.400"
            backgroundColor="blue.200"
          >
            <Link href="/login" outlineColor="transparent" color="blue.400">
              Entrar
            </Link>
          </Button>
        </Box>
      )}
      {isLoggedIn && (
        <InputGroup flex="1" startElement={<LuSearch />}>
          <Input
            placeholder="Buscando por algo?"
            borderColor="blue.400"
            variant="flushed"
            _light={{ color: "black" }}
            _dark={{ color: "white" }}
          />
        </InputGroup>
      )}
    </HStack>
  );
}
