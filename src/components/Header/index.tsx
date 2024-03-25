import { useNavigate } from "react-router-dom";
import { LOGOUT } from "../../redux/actionTypes/user";
import { useDispatch } from "react-redux";

const Header = () => {
  const nagivate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem('token');

    dispatch({ type: LOGOUT });

    nagivate('/login')
  }

  return (
    <div>
      <button onClick={ () => nagivate('/favorites') }>fav</button>
      <button onClick={ () => nagivate('/products') }>produtos</button>
      <button onClick={ () => logout() }>Sair</button>
    </div>
  );
};

export default Header;