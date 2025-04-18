"use client";

import { ColorModeButton, DarkMode } from "@/components/ui/color-mode";
import { Provider } from "@/components/ui/provider";
import { PasswordInput } from "@/components/ui/password-input";
import { registerSchema } from "@/schemas/auth.shema";
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
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@/contexts/AuthContext";
import { UserFormData } from "@/types/auth";
import { useForm } from "react-hook-form";

export default function Register() {
  const { registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = ({ email, password, name }: UserFormData) => {
    registerUser({ email, password, name });

    console.log(email);
  };

  console.log(errors);

  return (
    <Provider>
      <Center h="100vh" as="form" onSubmit={handleSubmit(onSubmit)}>
        <Fieldset.Root
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          border="1px solid #fff"
          w={{ base: "70%", sm: "60%", md: "50%", lg: "40%", xl: "30%" }}
          h="auto"
          p="1rem"
          borderRadius="20px"
        >
          <Stack>
            <Field.Root>
              <FieldsetLegend fontSize="1.3rem">
                Seja Bem Vindo ao StreetWear!
              </FieldsetLegend>
              <FieldHelperText fontSize="0.9rem">
                Faça seu registro:
              </FieldHelperText>
            </Field.Root>
          </Stack>
          {/*  */}
          <Field.Root>
            <Field.Label>Nome:</Field.Label>
            <Input
              {...register("name")}
              variant="subtle"
              placeholder="Digite seu nome"
            />
            <Text color="red.500" fontSize="14px">
              {" "}
              {errors.name?.message}{" "}
            </Text>
          </Field.Root>
          {/*  */}
          <Field.Root>
            <Field.Label>Email:</Field.Label>
            <Input
              {...register("email")}
              variant="subtle"
              placeholder="Digite seu email"
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
              variant="subtle"
              placeholder="Digite sua senha"
            />
            <Text color="red.500" fontSize="14px">
              {" "}
              {errors.password?.message}{" "}
            </Text>
          </Field.Root>
          <Field.Root>
            <Field.Label>Confirme sua senha:</Field.Label>
            <PasswordInput
              {...register("confirmPassword")}
              variant="subtle"
              placeholder="Digite novamente sua senha"
            />
            <Text color="red.500" fontSize="14px">
              {" "}
              {errors.confirmPassword?.message}{" "}
            </Text>
          </Field.Root>
          <Button type="submit" mt="3rem" borderRadius="20px">
            Entrar
          </Button>
          <Field.Root>
            <Field.Root
              display="flex"
              flexDir="row"
              justifyContent="space-between"
            >
              <FieldHelperText fontSize="1rem" p="1rem 0">
                Já possui conta?{" "}
                <Link href="/login">
                  <Highlight query="Entrar" styles={{ color: "green.300" }}>
                    Entrar
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
