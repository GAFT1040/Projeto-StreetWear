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
} from "@chakra-ui/react";
import Link from "next/link";

export default function Register() {
  return (
    <Provider>
      <Center h="100vh" as="div">
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
                Faça seu login:
              </FieldHelperText>
            </Field.Root>
          </Stack>
          {/*  */}
          <Field.Root>
            <Field.Label>Nome:</Field.Label>
            <Input type="name" variant="subtle" placeholder="Digite seu nome" />
          </Field.Root>
          {/*  */}
          <Field.Root>
            <Field.Label>Email:</Field.Label>
            <Input
              type="email"
              variant="subtle"
              placeholder="Digite seu email"
            />
          </Field.Root>
          {/*  */}
          <Field.Root>
            <Field.Label>Senha:</Field.Label>
            <PasswordInput
              type="text"
              variant="subtle"
              placeholder="Digite sua senha"
            />
          </Field.Root>
          <Field.Root>
            <Field.Label>Confirme sua senha:</Field.Label>
            <PasswordInput
              type="text"
              variant="subtle"
              placeholder="Digite novamente sua senha"
            />
          </Field.Root>
          <Button mt="3rem" borderRadius="20px">
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
                  <Highlight query="Entrar" styles={{ color: "#4affb4" }}>
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
