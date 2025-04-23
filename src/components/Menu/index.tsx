import { Button, Menu, Portal } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { LuChevronRight } from "react-icons/lu";

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
            <Menu.Item value="new-txt">Shop</Menu.Item>
            <Menu.Item value="new-file">Desconto</Menu.Item>
            <Menu.Root positioning={{ placement: "right-start", gutter: 2 }}>
              <Menu.TriggerItem>
                Peças <LuChevronRight />
              </Menu.TriggerItem>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="panda">Camisas</Menu.Item>
                    <Menu.Item value="ark">Calças</Menu.Item>
                    <Menu.Item value="chakra">Tênis</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
            <Menu.Item value="open-file">Sobre nós</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default Demo;
