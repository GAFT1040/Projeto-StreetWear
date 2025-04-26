import { Button, Menu, MenuSeparator, Portal } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { LuChevronRight } from "react-icons/lu";
import AuthButtonsMenu from "../MenuSing";

const Demo = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <IconButton background="transparent" color="blue.400">
          <FiMenu />
        </IconButton>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="Shop">Shop</Menu.Item>
            <Menu.Item value="DEsconto">Destaques</Menu.Item>
            <Menu.Root positioning={{ placement: "right-start", gutter: 2 }}>
              <Menu.TriggerItem>
                Peças <LuChevronRight />
              </Menu.TriggerItem>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="Camisas">Camisas</Menu.Item>
                    <Menu.Item value="Calças">Calças</Menu.Item>
                    <Menu.Item value="Tênis">Tênis</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
            <Menu.Item value="Sobre-nós">Sobre nós</Menu.Item>
            <AuthButtonsMenu />
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default Demo;
