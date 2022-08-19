import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { validateEmail, validateOTP } from "../../utils/validation";

const LoginContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Login = () => {
  const [email, setEmail] = useState(""),
    [otp, setOTP] = useState(""),
    [errorMsg, setErrorMsg] = useState({
      errorMsgEmail: null,
      errorMsgOTP: null,
    });

  const emailHandler = (e) => setEmail(e.target.value);
  const otpHandler = (e) => setOTP(e.target.value);

  const loginClickHandler = (e) => {
    setErrorMsg({
      errorMsgEmail: validateEmail(email),
      errorMsgOTP: validateOTP(otp),
    });
    if (errorMsg.errorMsgEmail && errorMsg.errorMsgOTP) {
    }
  };
  return (
    <LoginContainer>
      <Box
        component="form"
        autoComplete="off"
        sx={{
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          borderRadius: "8px",
        }}
      >
        <TextField
          type="email"
          label="Email"
          variant="standard"
          value={email}
          onChange={emailHandler}
          required
          {...(errorMsg.errorMsgEmail && {
            error: true,
            helperText: errorMsg.errorMsgEmail,
          })}
        />
        <TextField
          type="password"
          label="OTP"
          variant="standard"
          value={otp}
          onChange={otpHandler}
          required
          {...(errorMsg.errorMsgOTP && {
            error: true,
            helperText: errorMsg.errorMsgOTP,
          })}
        />
        <Button variant="contained" onClick={loginClickHandler}>
          Login
        </Button>
      </Box>
    </LoginContainer>
  );
};

export default Login;
