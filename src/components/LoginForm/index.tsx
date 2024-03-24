import { ChangeEventHandler, useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { StyledButtonSection, StyledInputSection, StyledLoginForm } from "./style";
import { LoginData, LoginResponse } from "../interfaces/login-data";
import useLoginMutate from "../../hooks/useLoginMutate";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";

const LoginForm = () => {
  const [token, setToken] = useLocalStorage<LoginResponse | null>("token", null);
  const [loginData, setLoginData] = useState<LoginData>({
    email: undefined,
    password: undefined
  });

  useEffect(() => {
    if (token) {
      navigate("/products");
    }
  });

  const navigate = useNavigate();
  const { mutate, isSuccess, data, isError, error } = useLoginMutate();

  const handleLogin: ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const submit = () => {
    mutate(loginData)
  };

  useEffect(() => {
    if (isSuccess && data.data) {
      setToken(data.data)
      navigate('/products')
    }
  }, [isSuccess, data, navigate, setToken]);

  return (
    <StyledLoginForm>
      <StyledInputSection>
        <Input
          type='text'
          name='email'
          onChange={ handleLogin }
          placeholder='email@email.com'
          title='E-mail'
        />
        <Input
          type='password'
          name='password'
          onChange={ handleLogin }
          placeholder='********'
          title='Senha'
        />
      </StyledInputSection>
      <StyledButtonSection>
        <Button
          title='Entrar'
          onClick={ () => submit() }
        />
        <Button
          title='Criar Conta'
          onClick={ () => console.log('Criar Conta') }
        />
      </StyledButtonSection>
      { isError && <p>{ error.response.data.message }</p> }
    </StyledLoginForm>
  );
};

export default LoginForm;