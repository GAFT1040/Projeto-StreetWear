"use client";

import { ColorModeButton, DarkMode } from "@/components/ui/color-mode";
import { Provider } from "@/components/ui/provider";
import { PasswordInput } from "@/components/ui/password-input";
import {
  Input,
  Field,
  Center,
  Stack,
  FieldsetLegend,
  FieldHelperText,
  Fieldset,
  Button,
  Highlight,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginUserData } from "@/types/auth";
import { loginSchema } from "@/schemas/auth.shema";

export default function Login() {
  const { loginUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitForm = (data: LoginUserData) => {
    loginUser(data);
  };
  console.log(errors);

  return (
    <Provider>
      <Center h="100vh" as="form" onSubmit={handleSubmit(submitForm)}>
        <Fieldset.Root
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          border="1px solid #fff"
          w={{ base: "70%", sm: "60%", md: "50%", lg: "40%", xl: "30%" }}
          h="auto"
          p="1rem"
          borderRadius="20px"
          _light={{
            backgroundColor: "orange.100",
            borderColor: "blue.400",
            color: "blue.400",
          }}
          _dark={{
            color: "orange.100",
            backgroundColor: "blue.400",
            borderColor: "orange.100",
          }}
        >
          <Stack>
            <Field.Root>
              <FieldsetLegend
                fontSize="1.3rem"
                _light={{ color: "blue.400" }}
                _dark={{
                  color: "orange.100",
                }}
              >
                Seja Bem Vindo ao StreetWear!
              </FieldsetLegend>
              <FieldHelperText
                fontSize="0.9rem"
                _light={{ color: "blue.400" }}
                _dark={{
                  color: "orange.100",
                }}
              >
                Faça seu login:
              </FieldHelperText>
            </Field.Root>
          </Stack>
          <Field.Root>
            <Field.Label>Email:</Field.Label>
            <Input
              {...register("email")}
              variant="flushed"
              placeholder="Digite seu email"
              _light={{
                color: "blue.400",
                backgroundColor: "orange.100",
                borderColor: "blue.400",
              }}
              _dark={{
                color: "orange.100",
                backgroundColor: "blue.400",
                borderColor: "orange.100",
              }}
            />
            <Text color="red.500" fontSize="14px">
              {" "}
              {errors.email?.message}{" "}
            </Text>
          </Field.Root>
          {/*  */}
          <Field.Root>
            <Field.Label>Senha:</Field.Label>
            <PasswordInput
              {...register("password")}
              variant="flushed"
              placeholder="Digite sua senha"
              _light={{
                color: "blue.400",
                backgroundColor: "orange.100",
                borderColor: "blue.400",
              }}
              _dark={{
                color: "orange.100",
                backgroundColor: "blue.400",
                borderColor: "orange.100",
              }}
            />
            <Text color="red.500" fontSize="14px">
              {" "}
              {errors.password?.message}{" "}
            </Text>
          </Field.Root>
          <Button mt="3rem" borderRadius="20px" type="submit">
            Entrar
          </Button>
          <Field.Root>
            <Field.Root
              display="flex"
              flexDir="row"
              justifyContent="space-between"
            >
              <FieldHelperText
                fontSize="1rem"
                p="1rem 0"
                _light={{ color: "blue.400" }}
                _dark={{ color: "orange.100" }}
              >
                Não possui uma conta?{" "}
                <Link href="/register">
                  <Highlight
                    query="Cadastre-se"
                    styles={{ color: "yellow.500" }}
                  >
                    Cadastre-se
                  </Highlight>
                </Link>
              </FieldHelperText>
              <ColorModeButton backgroundColor="transparent" />
            </Field.Root>
          </Field.Root>
        </Fieldset.Root>
      </Center>
    </Provider>
  );
}
