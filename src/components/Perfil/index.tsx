"use client";
import api from "@/services/api";
import { getUser } from "@/services/get.users";
import { User } from "@/types/usuarios";
import { useEffect, useState } from "react";
import {
  Button,
  CloseButton,
  Drawer,
  Input,
  Portal,
  Stack,
} from "@chakra-ui/react";
import { useRef } from "react";

const Perfil = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoged, setIsLoged] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("@token");
    const userId = localStorage.getItem("@userId");

    const fetchData = async () => {
      if (token) {
        setIsLoged(true);
        api.defaults.headers.common["Authorization"] =
          `Bearer ${JSON.parse(token)}`;
      }
      if (userId) {
        const response = await getUser(Number(JSON.parse(userId)));
        setUser(response);
        console.log(response.name);
      }
    };

    fetchData();
  }, []);

  const ref = useRef<HTMLInputElement>(null);

  return (
    <Drawer.Root initialFocusEl={() => ref.current}>
      <Drawer.Trigger asChild>
        <Button variant="outline" size="sm">
          Open Drawer
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Drawer Title</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Stack mt="5">
                <Input defaultValue="Naruto" placeholder="First name" />
                <Input ref={ref} placeholder="Email" />
              </Stack>
            </Drawer.Body>
            <Drawer.Footer>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
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

export default Perfil();
