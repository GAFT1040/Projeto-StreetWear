import {
  Button,
  CloseButton,
  Drawer,
  IconButton,
  Portal,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

const Cart = () => {
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
        >
          <FaShoppingCart />
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Carrinho</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body></Drawer.Body>
            <Drawer.Footer display="flex" justifyContent="space-between">
              <IconButton>
                <FiTrash />
              </IconButton>
              <Button backgroundColor="blue.100" color="blue.800">
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
