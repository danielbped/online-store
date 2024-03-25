import { useLocation, useNavigate } from "react-router-dom";
import { LOGOUT } from "../../redux/actionTypes/user";
import { useDispatch } from "react-redux";
import { useLocalStorage } from "@uidotdev/usehooks";
import { LoginResponse } from "../../interfaces/login-data.interface";
import { StyledButtonSection, StyledHeader, StyledHeaderButton, StyledHeaderTitle, StyledIconButton } from "./style";
import { CiLogout } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";


const Header = () => {
  const [token, setToken] = useLocalStorage<LoginResponse | null>("token", null);

  const nagivate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const logout = () => {
    setToken(null);

    dispatch({ type: LOGOUT });

    nagivate('/products');
  };

  const showButton = (paths: string[]) => {
    return paths.every((path) => !pathname.includes(path))
  };

  return (
    <StyledHeader>
      <StyledHeaderTitle onClick={ () => nagivate('/products') }>
        Online Store
      </StyledHeaderTitle>
      <StyledButtonSection>
        { showButton(['products', 'login', 'register']) && <StyledHeaderButton onClick={ () => nagivate('/products') }>Produtos</StyledHeaderButton> }
        { (token && showButton(['favorites'])) && <StyledIconButton onClick={ () => nagivate('/favorites') }>
          <FaHeart />
        </StyledIconButton> }
        { !token && showButton(['login']) && <StyledHeaderButton onClick={ () => nagivate('/login') }>Entrar</StyledHeaderButton> }
        { token && <StyledIconButton onClick={ () => logout() }>
          <CiLogout />
        </StyledIconButton> }
      </StyledButtonSection>
    </StyledHeader>
  );
};

export default Header;