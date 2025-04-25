"use client";

import {
  Link,
  MenuContent,
  MenuItem,
  MenuSeparator,
  Span,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function AuthButtonsMenu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@token");
    setIsLoggedIn(!!token);
  }, []);
  if (!!isLoggedIn) {
    return null;
  }
  return (
    <MenuContent backgroundColor="blue.100" borderRadius="10px">
      <Span>
        <MenuItem
          value="Registro"
          justifyContent="center"
          borderRadius="10px"
          border="1px solid "
          borderColor="black"
          backgroundColor="white"
          mb="10px"
        >
          <Link href="/register" color="black">
            Registre-se
          </Link>
        </MenuItem>
        <MenuItem
          borderRadius="10px"
          justifyContent="center"
          value="Entrar"
          border="1px solid "
          borderColor="blue.600"
          backgroundColor="blue.200"
        >
          <Link href="/login" color="black">
            Entrar
          </Link>
        </MenuItem>
      </Span>
    </MenuContent>
  );
}
