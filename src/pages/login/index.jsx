import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { validateEmail, validateOTP } from "../../utils/validation";
import { fetchUsers } from "../../store/user/userAction";

import { LoginContainer, FormBox } from "./styles";
import FormInput from "../../components/form-input/index";
import BaseButton from "../../components/button/index";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [errorMsg, setErrorMsg] = useState({
    errorMsgEmail: "",
    errorMsgOTP: "",
  });

  const emailHandler = (e) => setEmail(e.target.value);
  const otpHandler = (e) => setOTP(e.target.value);

  const validUser = () => {
    setEmail("");
    setOTP("");
    setErrorMsg({
      errorMsgEmail: "",
      errorMsgOTP: "",
    });
  };

  const loginClickHandler = () => {
    const errorValue = { email: validateEmail(email), otp: validateOTP(otp) };
    setErrorMsg({
      errorMsgEmail: errorValue.email,
      errorMsgOTP: errorValue.otp,
    });
    if (!errorValue.email && !errorValue.otp) {
      dispatch(fetchUsers({ email, otp }));
      typeof user.value === "object" && validUser();
      navigate("/landing");
    }
  };

  return (
    <LoginContainer>
      <FormBox component="form" autoComplete="off">
        {typeof user.value !== "object" && <p>Invalid Credentials</p>}
        <FormInput
          type="email"
          label="Email"
          value={email}
          onChange={emailHandler}
          {...(errorMsg.errorMsgEmail && {
            error: true,
            helperText: errorMsg.errorMsgEmail,
          })}
        />
        <FormInput
          type="password"
          label="OTP"
          value={otp}
          onChange={otpHandler}
          {...(errorMsg.errorMsgOTP && {
            error: true,
            helperText: errorMsg.errorMsgOTP,
          })}
        />
        <BaseButton variant="contained" onClick={loginClickHandler}>
          {user.loading ? "Validating" : "Login"}
        </BaseButton>
      </FormBox>
    </LoginContainer>
  );
};

export default Login;
