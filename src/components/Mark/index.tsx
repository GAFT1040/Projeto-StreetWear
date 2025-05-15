import {
  Box,
  Button,
  CloseButton,
  Dialog,
  Image,
  Portal,
  Text,
} from "@chakra-ui/react";

const Mark = () => {
  return (
    <Dialog.Root scrollBehavior="inside" size="sm">
      <Dialog.Trigger asChild>
        <Button
          variant="outline"
          backgroundColor="transparent"
          borderColor="transparent"
        >
          <Text
            _hover={{
              backgroundColor: "blue.400",
              color: "orange.100",
            }}
            color="blue.400"
            fontWeight="normal"
            fontSize="1rem"
          >
            Lista de Marcas
          </Text>
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content backgroundImage="url(/temaperfil.png)">
            <Dialog.Header>
              <Dialog.Title>Marcas</Dialog.Title>
            </Dialog.Header>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
            <Dialog.Body>
              <Box
                as="ul"
                display="flex"
                flexDir="column"
                alignItems="center"
                gap={10}
              >
                <li>
                  <Image w="300px" src="/Mark/classlogo.png" />
                </li>
                <li>
                  <Image w="300px" src="/Mark/newbalancelogo.png" />
                </li>
                <li>
                  <Image w="300px" src="/Mark/sufganglogo.png" />
                </li>
                <li>
                  <Image w="300px" src="/Mark/teslalogo.png" />
                </li>
                <li>
                  <Image w="300px" src="/Mark/vanslogo.png" />
                </li>
              </Box>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default Mark;
