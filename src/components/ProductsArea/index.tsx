import { Product } from "@/types/products";
import { Button, Card, Image, Text } from "@chakra-ui/react";

const ProductsCard: React.FC<Product> = ({
  link,
  value,
  name,
  color,
  mark,
}) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image src={link} alt="Green double couch with wooden legs" />
      <Card.Body gap="2">
        <Card.Title>{name}</Card.Title>
        <Card.Description>{mark}</Card.Description>
        <Card.Description>{color}</Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          {value.toLocaleString("pt-BR", {
            currency: "BRL",
            style: "currency",
          })}
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Comprea Agora</Button>
        <Button variant="ghost">Adicionar ao Carrinho</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default ProductsCard;
