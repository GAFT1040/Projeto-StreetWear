"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CreateCartProducts";
import {
  Button,
  CloseButton,
  Drawer,
  IconButton,
  Portal,
  Text,
  VStack,
  HStack,
  Card,
  Box,
  Image,
  Badge,
  GridItem,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";

import { FaShoppingCart } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, total, clearCart, calculate } = useCart();

  const { isLoged } = useAuth();

  const [showPay, setShowPay] = useState(false);

  const buy = () => {
    if (cart.length === 0 || !isLoged) {
      toast.error("Você não pode finalizar esta compra");
    } else {
      window.location.href = "/pay";
    }
  };

  return (
    <Drawer.Root>
      <Drawer.Trigger
        asChild
        position="fixed"
        bottom={0}
        right={5}
        m="2rem"
        zIndex={6}
      >
        <IconButton
          variant="outline"
          borderRadius="100%"
          backgroundColor="blue.400"
          borderColor="blue.400"
          position="relative"
        >
          <FaShoppingCart />

          {cart.length > 0 && (
            <Badge
              position="absolute"
              top="-16px"
              right="-11px"
              backgroundColor="blue.100"
              color="black"
              borderRadius="full"
              fontSize="0.9rem"
              padding="0.4rem"
            >
              {calculate}
            </Badge>
          )}
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content backgroundImage="url(/temasing.png)">
            <Drawer.Header>
              <Drawer.Title color="blue.400">Carrinho</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <VStack align="stretch">
                {cart.length === 0 ? (
                  <Text fontSize="1rem" color="black">
                    Não há nada no seu carrinho.
                  </Text>
                ) : (
                  cart.map((item) => (
                    <HStack key={item.id} justify="space-between">
                      <Card.Root
                        flexDirection="row"
                        overflow="hidden"
                        maxW="xl"
                        borderRadius="1rem"
                        borderColor="transparent"
                        backgroundColor="white"
                      >
                        <Box display="flex">
                          <Image
                            objectFit="contain"
                            maxW="90px"
                            src={item.link}
                            alt={item.name}
                          />
                          <Card.Body>
                            <Card.Title mb="2" color="black">
                              {item.name}{" "}
                            </Card.Title>
                            <Box display="flex" gap={3}>
                              <Text color="black">{item.quantity} x</Text>
                              <Text
                                fontSize="1.1rem"
                                color="blue.400"
                                fontWeight="bold"
                              >
                                {item.value.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </Text>
                            </Box>
                          </Card.Body>
                        </Box>
                      </Card.Root>
                    </HStack>
                  ))
                )}
              </VStack>
            </Drawer.Body>
            <Box justifyItems="center" m="2rem" backgroundColor="transparent">
              <Text p="1.1rem" fontWeight="bold" color="white">
                Total:{" "}
                {total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Text>
            </Box>
            <Drawer.Footer display="flex" justifyContent="space-between">
              <IconButton
                onClick={clearCart}
                backgroundColor="blue.100"
                color="blue.800"
              >
                <FiTrash />
              </IconButton>
              <Button
                backgroundColor="yellow.100"
                color="blue.800"
                fontSize="1.1rem"
                borderRadius="2rem"
                onClick={buy}
              >
                Finalizar Compra
              </Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default Cart;
