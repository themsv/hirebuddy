import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
export const ShadowBox = styled(Box)`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
`;

export const Header = styled(Box)`
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  background-color: #fe414d;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  margin: 0px;
  color: #fff;
`;
