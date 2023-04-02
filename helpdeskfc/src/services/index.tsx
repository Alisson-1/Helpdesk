import axios, { AxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";
import { json } from "stream/consumers";
const api = axios.create({
  baseURL: "https://localhost:7023/",
});

export default api;
export interface Usuario {
  matricula: number,
  nome: string,
  funcao: string,
  email: string,
  senha: string
}

export interface LoginUsuario {
  email: string,
  senha: string
}
export const cadastrarUsuario = async (usuario: Usuario) => {
  const url = 'https://localhost:7023/CadastrarUsuario';
  try {
    await axios.post(url, usuario);
    alert("Usuario cadastrado com sucesso.")
  } catch (error:any) {
    
    alert(error.response.data)
    
  }
}

export const LoginUsuario = async (usuario: LoginUsuario) => {
  
  
    const url = 'https://localhost:7023/Login';
    try {
      await axios.post(url, usuario);
      alert("Login efetuado com sucesso")
      window.location.href = "/mainpage"
    } catch (error:any) {
    
      alert(error.response.data)
      
    }
  }