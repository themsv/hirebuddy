import Login from "../../components/login";
import { AuthenticateContainer, SideInfo } from "./styles";

const Authenticate = () => {
  return (
    <AuthenticateContainer>
      <SideInfo>
        <h2>Welcome to HireBuddy</h2>
        <p>
          Stop using excel to record every interview's details and start using
          HireBuddy!!
        </p>
        <p>Login to start &rarr;</p>
      </SideInfo>
      <Login />
    </AuthenticateContainer>
  );
};

export default Authenticate;
