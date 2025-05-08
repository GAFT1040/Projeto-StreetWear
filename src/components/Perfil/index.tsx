"use client";
import {
  Button,
  CloseButton,
  Drawer,
  Input,
  Portal,
  Stack,
  Flex,
  Box,
} from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import api from "@/services/api";
import { getUser } from "@/services/get.users";
import { User } from "@/types/usuarios";
import { toast } from "react-toastify";
import { LightMode } from "../ui/color-mode";
import DeletButton from "../DeletButtom";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

const Perfil = () => {
  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const token = localStorage.getItem("@token");
    const userId = localStorage.getItem("@userId");

    const fetchData = async () => {
      if (token) {
        api.defaults.headers.common["Authorization"] =
          `Bearer ${JSON.parse(token)}`;
      }
      if (userId) {
        const response = await getUser(Number(JSON.parse(userId)));
        setUser(response);
        setName(response.name);
        setEmail(response.email);
      }
    };

    fetchData();
  }, []);

  const handleUpdate = async () => {
    if (password && password !== confirmPassword) {
      toast.error("Senhas não coincidem.");
      return;
    }

    try {
      await api.patch(`/users/${user?.id}`, {
        name,
        email,
        ...(password ? { password } : {}),
      });

      toast.success("Perfil atualizado com sucesso!");
    } catch (err) {
      toast.error("Erro ao atualizar perfil.");
    }
  };

  const cancelClik = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  if (!user) return null;

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
          <Drawer.Content
            backgroundImage="url(/temaperfil.png)"
            backgroundPositionY="bottom"
            backgroundPositionX="center"
          >
            <LightMode>
              <Drawer.Header>
                <Drawer.Title color="blue.400">Perfil do Usuário</Drawer.Title>
              </Drawer.Header>

              <Drawer.Body>
                <Stack mt={5} spaceY="10">
                  <Input
                    ref={ref}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={`Nome: ${user?.name}`}
                  />
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={`Email: ${user?.email}`}
                  />
                  <Flex gap={2}>
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Nova Senha"
                    />
                    <Button
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                      background="blue.400"
                    >
                      {showPassword ? <IoEyeSharp /> : <FaEyeSlash />}
                    </Button>
                  </Flex>
                  <Flex gap={2}>
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirmar Senha"
                    />
                    <Button
                      size="sm"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      background="blue.400"
                    >
                      {showConfirmPassword ? <IoEyeSharp /> : <FaEyeSlash />}
                    </Button>
                  </Flex>
                  <Box w="100%" justifyItems="center">
                    <DeletButton />
                  </Box>
                </Stack>
              </Drawer.Body>
              <Drawer.Footer display="flex" flexDir="column" alignItems="start">
                <Button
                  w="100%"
                  onClick={cancelClik}
                  variant="outline"
                  color="white"
                  borderRadius="2rem"
                >
                  Cancelar
                </Button>
                <Button
                  w="100%"
                  onClick={handleUpdate}
                  colorScheme="blue"
                  backgroundColor="blue.400"
                >
                  Salvar
                </Button>
              </Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </LightMode>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default Perfil;
