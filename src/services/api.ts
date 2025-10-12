import axios from "axios";
import Router from "next/router";
import { config } from "process";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if(error.response?.status === 401){
      localStorage.removeItem("@token");
      localStorage.removeItem("@userId");
      Router.push("/login");
      return;
    }
    return Promise.reject(error);
  }
);

export default api;
