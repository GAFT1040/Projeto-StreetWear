import { Product } from "@/types/products";
import { Button, Card, Image, Text } from "@chakra-ui/react";
import { DarkMode } from "../ui/color-mode";
import { useCart } from "@/contexts/CreateCartProducts";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";

const ProductsCard: React.FC<Product> = (props) => {
  const { addToCart } = useCart();
  const router = useRouter();
  const { isLoged } = useAuth();

  const handleAddToCart = () => {
    console.log(isLoged);
    if (!isLoged) {
      toast.error("Você ainda não fez loguin");
      router.push("/login");
    } else {
      addToCart(props);
      toast.success("Produto enviado para o carrinho!");
    }
  };

  return (
    <DarkMode>
      <Card.Root
        overflow="hidden"
        mb="2rem"
        borderRadius="30px"
        transition="all 1s"
        _hover={{ transform: "scale(1.1)" }}
      >
        <Image
          src={props.link}
          alt={props.name}
          w="auto"
          h="500px"
          objectFit="fill"
        />
        <Card.Body gap="2">
          <Card.Title>{props.name}</Card.Title>
          <Card.Description>{props.mark}</Card.Description>
          <Card.Description>{props.color}</Card.Description>
          <Text
            textStyle="2xl"
            fontWeight="medium"
            letterSpacing="tight"
            mt="2"
          >
            {props.value.toLocaleString("pt-BR", {
              currency: "BRL",
              style: "currency",
            })}
          </Text>
        </Card.Body>
        <Card.Footer gap="2" flexDir="column" display="flex" alignItems="start">
          <Button
            variant="solid"
            backgroundColor="blue.400"
            borderRadius="10px"
            w="100%"
          >
            Comprar Agora
          </Button>
          <Button
            variant="ghost"
            border="2px solid gray"
            borderRadius="10px"
            w="100%"
            onClick={handleAddToCart}
          >
            Adicionar ao Carrinho
          </Button>
        </Card.Footer>
      </Card.Root>
    </DarkMode>
  );
};

export default ProductsCard;
