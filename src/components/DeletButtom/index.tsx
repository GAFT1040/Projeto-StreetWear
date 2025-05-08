import { Button, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const DeletButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@token");
    setIsLoggedIn(!!token);
  }, []);

  function Delet() {
    const confirmar = window.confirm("Tem certeza que deseja sair?");
    if (confirmar) {
      localStorage.clear();
      window.location.reload();
    }
  }

  return (
    <HStack>
      {!!isLoggedIn && (
        <Button
          onClick={Delet}
          borderRadius="full"
          background="red.700"
          color="white"
          w="100%"
        >
          Deseja sair da conta?
        </Button>
      )}
    </HStack>
  );
};

export default DeletButton;
