import { LoginFormInterface } from "../../interfaces/login-form.interface";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";
import Input from "../Input";
import { StyledButtonSection, StyledInputSection, StyledLoginForm, StyledLoginFormTitle, StyledRegisterCTA, StyledRegisterLink } from "./style";

const LoginForm = (props: LoginFormInterface) => {
  return (
    <StyledLoginForm>
      <StyledLoginFormTitle>
        Login
      </StyledLoginFormTitle>
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
        { props.isError && <ErrorMessage message={ props.error } /> }
        <StyledRegisterCTA>
          Não possui conta?
          <StyledRegisterLink
            onClick={ () => props.handleNavigate('register')
          }>
            { " " }
            Registrar
          </StyledRegisterLink>
        </StyledRegisterCTA>
      </StyledButtonSection>
    </StyledLoginForm>
  );
};

export default LoginForm;