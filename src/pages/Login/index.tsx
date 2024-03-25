import LoginForm from "../../components/LoginForm";
import { StyledLogin } from "./style";
import { LoginData, LoginResponse } from '../../interfaces/login-data.interface';
import useLoginMutate from "../../hooks/useLoginMutate";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GET_USER } from "../../redux/actionTypes/user";

const Login = () => {
  const [token, setToken] = useLocalStorage<LoginResponse | null>("token", null);
  const [loginData, setLoginData] = useState<LoginData>({
    email: undefined,
    password: undefined
  });
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate, isSuccess, data, isError, error } = useLoginMutate();
  const handleNavigate = (route: string) => navigate(`/${route}`)

  useEffect(() => {
    if (token) {
      return handleNavigate("products");
    } else {
      return handleNavigate("login")
    }
  }, [token]);

  const handleLogin: ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const submit = () => {
    mutate(loginData);
  };

  useEffect(() => {
    if (isSuccess && data.data) {
      setToken(data.data.token);

      dispatch({
        type: GET_USER,
        payload: data.data.user,
      });

      handleNavigate('products');
    }
  }, [isSuccess, data]);

  return (
    <StyledLogin>
      <LoginForm
        error={ error?.response.data.message }
        isError={ isError }
        submit={ submit }
        handleLogin={ handleLogin }
        handleNavigate={ handleNavigate }
      />
    </StyledLogin>
  );
};

export default Login;
