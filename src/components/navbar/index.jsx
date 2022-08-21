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
        {user.value.email ? (
          <>
            <Link to="/landing">Logo</Link>
            <p>Conduct Interview</p>
            <p>
              Welcome {user.value.firstName} {user.value.lastName}
            </p>
            <Link to="/" onClick={logOutUser}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/">Logo</Link>
            <Link to="/">Login</Link>
          </>
        )}
      </NavBarContainer>
      <Outlet />
    </>
  );
};

export default NavBar;
