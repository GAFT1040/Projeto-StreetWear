import {
  Button,
  CloseButton,
  Drawer,
  IconButton,
  Portal,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

const Demo = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild position="fixed" bottom={0} right={0} m="2rem">
        <IconButton variant="outline" borderRadius="100%">
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
              <Button backgroundColor="green.300">Finalizar Compra</Button>
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

export default Demo;
