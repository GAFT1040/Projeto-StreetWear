import * as yup from "yup";

const passwordRules = yup
  .string()
  .required("Senha é obrigatória")
  .min(8, "Senha deve ter no mínimo 8 caractéres")
  .test(
    "has-uppercase",
    "Deve conter pelo menos uma letra maiúscula",
    (value) => /[A-Z]/.test(value || "")
  )
  .test("has-lowrcase", "Deve conter pelo menos uma letra minúscula", (value) =>
    /[a-z]/.test(value || "")
  )
  .test("has-number", "Deve conter pelo menos um número", (value) =>
    /[0-9]/.test(value || "")
  );

export const registerSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup
    .string()
    .email("Email é obrigatório")
    .required("Email é obrigatório"),
  password: passwordRules,
  confirmPassword: yup 
    .string()
    .required("A senha deve ser confimada")
    .oneOf([yup.ref("password")], "As senhas não conhecidem"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("Email é inválido").required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});
