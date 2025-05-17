"use client";

import { Provider } from "@/components/ui/provider";
import { useCart } from "@/contexts/CreateCartProducts";
import { Box, Button, Center, Input, Text } from "@chakra-ui/react";
import { toast } from "react-toastify";

export default function Pay() {
  const { cart, total, calculate } = useCart();

  return (
    <Provider>
      <Center
        p="5rem"
        borderColor="black"
        backgroundImage={{ xl: "url(/temasing.png)" }}
        backgroundColor="white"
        backgroundSize="120%"
        backgroundPosition="center botton"
      >
        <Box h="1000px" w="800px">
          <Box fontFamily="initial" fontSize="5rem" justifyItems="center">
            <Text color="blue.900">S</Text>
            <Text color="blue.300">W</Text>{" "}
          </Box>
          <Box display="flex" justifyContent="space-around" flexDir="column">
            <Box as="ul" p="1rem" display="flex" flexDir="column" gap="10px">
              <Text pb="1rem" color="black">
                Informações pessoais:
              </Text>
              <Box as="li">
                <Input
                  placeholder="Digite seu nome"
                  variant="flushed"
                  borderColor="black"
                  _placeholder={{ color: "black" }}
                />
              </Box>
              <Box as="li">
                <Input
                  placeholder="Digite seu email"
                  variant="flushed"
                  borderColor="black"
                  _placeholder={{ color: "black" }}
                />
              </Box>
              <Box as="li">
                <Input
                  placeholder="Digite seu CPF"
                  variant="flushed"
                  borderColor="black"
                  _placeholder={{ color: "black" }}
                />
              </Box>
              <Box as="li">
                <Input
                  placeholder="Digite seu endereço"
                  variant="flushed"
                  borderColor="black"
                  _placeholder={{ color: "black" }}
                />
              </Box>
              <Box as="li">
                <Input
                  placeholder="Digite o complemento (Não obrigatório)"
                  variant="flushed"
                  borderColor="black"
                  _placeholder={{ color: "black" }}
                />
              </Box>
            </Box>
            <Box as="ul" p="1rem" display="flex" flexDir="column" gap="10px">
              <Text pb="1rem" color="black">
                Localização de envio:
              </Text>
              <Box as="li">
                <Input
                  placeholder="Digite seu nome"
                  variant="outline"
                  borderColor="black"
                  _placeholder={{ color: "black" }}
                />
              </Box>
              <Box as="li">
                <Input
                  placeholder="Digite seu email"
                  variant="outline"
                  borderColor="black"
                  _placeholder={{ color: "black" }}
                />
              </Box>
              <Box as="li">
                <Input
                  placeholder="Digite seu CPF"
                  variant="outline"
                  borderColor="black"
                  _placeholder={{ color: "black" }}
                />
              </Box>
              <Box as="li">
                <Input
                  placeholder="Digite seu endereço"
                  variant="outline"
                  borderColor="black"
                  _placeholder={{ color: "black" }}
                />
              </Box>
              <Box as="li">
                <Input
                  placeholder="Digite o complemento (Não obrigatório)"
                  variant="outline"
                  borderColor="black"
                  _placeholder={{ color: "black" }}
                />
              </Box>
            </Box>
          </Box>
          <Center>
            <Box p="1rem" display="flex" flexDir="column" color="black">
              <Text>Informarções do pedido</Text>
              <Text>{calculate} produtos estão no carrinho</Text>
              <Text>Total da compra: {total}</Text>
            </Box>
            <Box>
              <Button
                w="full"
                backgroundColor="blue.400"
                borderRadius="60px"
                onClick={() =>
                  toast.error(
                    "Você ainda não tem permição para efetuar esta compra"
                  )
                }
              >
                Finalizar Compra
              </Button>
            </Box>
          </Center>
        </Box>
      </Center>
    </Provider>
  );
}
