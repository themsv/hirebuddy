import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const LoginContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

export const FormBox = styled(Box)`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;
