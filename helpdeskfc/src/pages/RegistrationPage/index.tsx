import { useState } from "react";
import { Usuario, cadastrarUsuario } from "../../services";
import { ButtoLogin, InputLogin, WelcomeText } from "../LoginPage/styles";
import { FormDiv } from "./styles";

export const RegistrarionPage = () => {
    
  const [formState, setFormState] = useState<any>();


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    cadastrarUsuario(formState);
  };
  return (
    <FormDiv onSubmit={handleSubmit}>
      <WelcomeText>Cadastro</WelcomeText>
      <InputLogin
        type={"number"}
        placeholder="Digite sua matricula"
        onChange={(e) => {
          setFormState({...formState, matricula: Number(e.target.value) });
        }}
      ></InputLogin>
      <InputLogin
        onChange={(e) => {
          setFormState({...formState, nome: e.target.value});
        }}
        type={"text"}
        placeholder="Digite seu nome"
      ></InputLogin>
      <InputLogin
        onChange={(e) => {
          setFormState({ ...formState, funcao: e.target.value });
        }}
        type={"text"}
        placeholder="Digite sua função"
      ></InputLogin>
      <InputLogin
        onChange={(e) => {
          setFormState({...formState, email: e.target.value });
        }}
        type={"text"}
        placeholder="Digite seu email"
      ></InputLogin>
      <InputLogin
        onChange={(e) => {
          setFormState({ ...formState, senha: e.target.value });
        }}
        type={"password"}
        placeholder="Digite sua senha"
      ></InputLogin>
      <ButtoLogin type={"submit"}>Cadastrar</ButtoLogin>
    </FormDiv>
  );
};


