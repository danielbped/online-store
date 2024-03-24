import { LoginFormInterface } from "../../interfaces/login-form.interface";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";
import Input from "../Input";
import { StyledButtonSection, StyledInputSection, StyledLoginForm } from "./style";

const LoginForm = (props: LoginFormInterface) => {
  return (
    <StyledLoginForm>
      <StyledInputSection>
        <Input
          type='text'
          name='email'
          onChange={ props.handleLogin }
          placeholder='email@email.com'
          title='E-mail'
        />
        <Input
          type='password'
          name='password'
          onChange={ props.handleLogin }
          placeholder='********'
          title='Senha'
        />
      </StyledInputSection>
      <StyledButtonSection>
        <Button
          title='Entrar'
          onClick={ () => props.submit() }
        />
        <Button
          title='Criar Conta'
          onClick={ () => props.handleNavigate('register') }
        />
      </StyledButtonSection>
      { props.isError && <ErrorMessage message={ props.error } /> }
    </StyledLoginForm>
  );
};

export default LoginForm;