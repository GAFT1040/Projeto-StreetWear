import { Product } from "@/types/products";
import { Button, Card, Image, Text } from "@chakra-ui/react";
import { DarkMode } from "../ui/color-mode";

const ProductsCard: React.FC<Product> = ({
  link,
  value,
  name,
  color,
  mark,
}) => {
  return (
    <DarkMode>
      <Card.Root
        overflow="hidden"
        mb="2rem"
        borderRadius="30px"
        transition="all 1s"
        _hover={{ transform: "scale(1.1)" }}
      >
        <Image src={link} alt={name} w="auto" h="400px" />
        <Card.Body gap="2">
          <Card.Title>{name}</Card.Title>
          <Card.Description>{mark}</Card.Description>
          <Card.Description>{color}</Card.Description>
          <Text
            textStyle="2xl"
            fontWeight="medium"
            letterSpacing="tight"
            mt="2"
          >
            {value.toLocaleString("pt-BR", {
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
            Comprea Agora
          </Button>
          <Button
            variant="ghost"
            border="2px solid gray"
            borderRadius="10px"
            w="100%"
          >
            Adicionar ao Carrinho
          </Button>
        </Card.Footer>
      </Card.Root>
    </DarkMode>
  );
};

export default ProductsCard;
