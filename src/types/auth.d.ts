export interface RegisterUserData {
  name: string;
  email: string;
  password: string;
}

export interface LoginUserData {
  email: string;
  password: string;
}

export interface AuthContextInterface {
  registerUser: (data: RegisterUserData) => void;
  loginUser: (data: loginUserData) => void;
}

export interface UserFormData extends RegisterUserData {
  confirmPassword: string;
}

export interface ProductsUserData {
  name: string;
  preço: number;
  marca: string;
  link: string;
  tipo: string;
}
