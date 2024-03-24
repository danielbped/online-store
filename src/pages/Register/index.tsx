import { ChangeEventHandler, useEffect, useState } from "react";
import RegisterForm from "../../components/RegisterForm";
import { StyledRegister } from "./style";
import { RegisterData } from "../../interfaces/register-data.interface";
import useRegisterMutate from "../../hooks/useRegisterMutate";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [registerData, setRegisterData] = useState<RegisterData>({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    password: undefined,
    confirmPassword: undefined
  });

  const { mutate, isSuccess, isError, error } = useRegisterMutate();

  const handleRegister: ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const disableSubmit = () => {
    const { password, confirmPassword } = registerData;

    return Object.values(registerData).some(field => !field)
      || Number(password?.length) < 8
      || password !== confirmPassword;
  }

  const navigate = useNavigate();
  const handleNavigate = (route: string) => navigate(`/${route}`)

  const submit = () => {
    !disableSubmit() && mutate(registerData)
  };

  useEffect(() => {
    if (isSuccess) {
      handleNavigate('login')
    }
  }, [isSuccess]);

  return (
    <StyledRegister>
      <RegisterForm
        handleRegister={ handleRegister }
        submit={ submit }
        isError={ isError }
        error={ error?.response.data.message }
        handleNavigate={ handleNavigate }
        disabledButton={ disableSubmit() }
      />
    </StyledRegister>
  );
};

export default Register;