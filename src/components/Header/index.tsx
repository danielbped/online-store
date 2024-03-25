import { useNavigate } from "react-router-dom";

const Header = () => {
  const nagivate = useNavigate()

  return (
    <div>
      <button onClick={ () => nagivate('/favorites') }>fav</button>
    </div>
  );
};

export default Header;