"use client";
import api from "@/services/api";
import { FaRegUser } from "react-icons/fa";
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
import { PasswordInput } from "../ui/password-input";

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
      }
    };

    fetchData();
  }, []);

  const ref = useRef<HTMLInputElement>(null);

  if (user === null) {
    return <p>carregando</p>;
  }

  return (
    <Drawer.Root initialFocusEl={() => ref.current}>
      <Drawer.Trigger asChild>
        <Button
          variant="outline"
          size="sm"
          border="transparent"
          background="transparent"
        >
          <FaRegUser />
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Perfil do Usuário</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Stack mt="5">
                <p>Nome</p>
                <Input ref={ref} placeholder={user.name} />
                <p>Email</p>
                <Input defaultValue={user.email} placeholder={user.email} />
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

export default Perfil;
