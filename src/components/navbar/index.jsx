import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../store/user/userSlice";

import { NavBarContainer } from "./styles";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const logOutUser = () => dispatch(removeUser());
  return (
    <>
      <NavBarContainer>
        <Link to="/">Logo</Link>
        {user.value.email ? (
          <>
            <p>Conduct Interview</p>
            <p>Welcome {user.value.email}</p>
            <Link to="/login" onClick={logOutUser}>
              Logout
            </Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </NavBarContainer>
      <Outlet />
    </>
  );
};

export default NavBar;
