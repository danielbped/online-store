import LoginForm from "../../components/LoginForm";
import { StyledLogin } from "./style";
import { LoginData, LoginResponse } from '../../interfaces/login-data.interface';
import useLoginMutate from "../../hooks/useLoginMutate";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";
import { ChangeEventHandler, useEffect, useState } from "react";

const Login = () => {
  const [token, setToken] = useLocalStorage<LoginResponse | null>("token", null);
  const [loginData, setLoginData] = useState<LoginData>({
    email: undefined,
    password: undefined
  });

  const navigate = useNavigate();
  const { mutate, isSuccess, data, isError, error } = useLoginMutate();

  useEffect(() => {
    if (token) {
      navigate("/products");
    }
  });

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
    <StyledLogin>
      <LoginForm
        error={ error?.response.data.message }
        isError={ isError }
        submit={ submit }
        handleLogin={ handleLogin }
      />
    </StyledLogin>
  );
};

export default Login;
