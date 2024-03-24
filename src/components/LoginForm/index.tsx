import { LoginFormInterface } from "../../interfaces/login-form.interface";
import Button from "../Button";
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
          onClick={ () => console.log('Criar Conta') }
        />
      </StyledButtonSection>
      { props.isError && <p>{ props.error }</p> }
    </StyledLoginForm>
  );
};

export default LoginForm;