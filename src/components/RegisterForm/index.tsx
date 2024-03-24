import { RegisterFormInterface } from "../../interfaces/register-form.interface";
import Button from "../Button";
import Input from "../Input";
import { StyledButtonSection, StyledInputSection, StyledRegisterForm } from "./style";


const RegisterForm = (props: RegisterFormInterface) => {
  return (
    <StyledRegisterForm>
      <StyledInputSection>
        <Input
          type='text'
          name='firstName'
          onChange={ props.handleRegister }
          placeholder='Jon'
          title='Nome'
        />
        <Input
          type='text'
          name='lastName'
          onChange={ props.handleRegister }
          placeholder='Snow'
          title='Sobrenome'
        />
        <Input
          type='text'
          name='email'
          onChange={ props.handleRegister }
          placeholder='email@email.com'
          title='E-mail'
        />
        <Input
          type='password'
          name='password'
          onChange={ props.handleRegister }
          placeholder='********'
          title='Senha'
        />
        <Input
          type='password'
          name='confirmPassword'
          onChange={ props.handleRegister }
          placeholder='********'
          title='Confirmar senha'
        />
      </StyledInputSection>
      <StyledButtonSection>
        <Button
          title='Cadastrar'
          onClick={ () => props.submit() }
          disabled={ props.disabledButton }
        />
        <Button
          title='voltar'
          onClick={ () => props.handleNavigate('login') }
        />
      </StyledButtonSection>
      { props.isError && <p>{ props.error }</p> }
    </StyledRegisterForm>
  );
};

export default RegisterForm;