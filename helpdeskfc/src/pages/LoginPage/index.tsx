import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header";
import {
  LoginBoxContainer,
  ScreenContainer,
  WelcomeText,
  LoginText,
  AsteriscText,
  InputLogin,
  LoginForgotText,
  ButtoLogin,
  ContainerLogin,
  DivLogin,
} from "./styles";
import HiddenIcon from "./svg/hidden.svg";
import { LoginUsuario } from "../../services";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<any>({});
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    LoginUsuario(formState);
  };
  return (
    <ScreenContainer>
      <Header></Header>
      <LoginBoxContainer>
        <ContainerLogin  onSubmit={handleSubmit}>
          <WelcomeText>Seja bem vindo(a)!</WelcomeText>
          <LoginText>
            Email <AsteriscText>*</AsteriscText>
          </LoginText>
          <InputLogin
            onChange={(e) => {
              setFormState({ ...formState, email: e.target.value });
            }}
            type={"text"}
            placeholder="Digite seu email"
          ></InputLogin>
          <LoginText>
            Senha <AsteriscText>*</AsteriscText>
          </LoginText>
          <DivLogin>
            <InputLogin
              onChange={(e) => {
                setFormState({ ...formState, senha: e.target.value });
              }}
              type={"password"}
              placeholder="Digite sua senha"
            ></InputLogin>
            <img src={HiddenIcon}></img>
          </DivLogin>
          <LoginForgotText className="GoLeft">Esqueci a senha</LoginForgotText>

          <ButtoLogin type={"submit"}>Entrar</ButtoLogin>
        </ContainerLogin>
      </LoginBoxContainer>
    </ScreenContainer>
  );
};
