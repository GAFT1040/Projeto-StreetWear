import { useCart } from "@/contexts/CreateCartProducts";
import {
  Box,
  Button,
  Center,
  CloseButton,
  Dialog,
  Input,
  Portal,
  Text,
} from "@chakra-ui/react";
import { toast } from "react-toastify";

const Buy = () => {
  const { cart, total, calculate } = useCart();

  return (
    <Dialog.Root size="full" motionPreset="slide-in-bottom">
      <Dialog.Trigger asChild>
        <Button variant="outline" size="sm">
          Open Dialog
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content p="2rem">
            <Dialog.Body>
              <Center>
                <Box
                  backgroundImage="url(/temasing.png)"
                  h="1000px"
                  w="800px"
                  border="2px solid"
                  borderRadius="40px"
                  borderColor="blue.200"
                >
                  <Box
                    fontFamily="initial"
                    fontSize="5rem"
                    spaceY={12}
                    justifyItems="center"
                    p="2rem"
                  >
                    <Text color="blue.900">S</Text>
                    <Text color="blue.300">W</Text>{" "}
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-around"
                    flexDir="column"
                  >
                    <Box
                      as="ul"
                      p="1rem"
                      display="flex"
                      flexDir="column"
                      gap="10px"
                    >
                      <Text pb="1rem">Informações pessoais:</Text>
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
                    <Box
                      as="ul"
                      p="1rem"
                      display="flex"
                      flexDir="column"
                      gap="10px"
                    >
                      <Text pb="1rem">Localização de envio:</Text>
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
                    <Box p="1rem" display="flex" flexDir="column" color="white">
                      <Text>Informarções do pedido</Text>
                      <Text>{calculate} produtos estão no carrinho</Text>
                      <Text>Total da compra: {total}</Text>
                    </Box>
                  </Center>
                  <Center>
                    <Box w="full" m="2rem">
                      <Button
                        w="full"
                        backgroundColor="green.400"
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
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default Buy;
