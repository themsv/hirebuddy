import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
export const ShadowBox = styled(Box)`
  font-family: "Hind", sans-serif;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
`;

export const Header = styled(Box)`
  padding: 8px 8px;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.03);
  font-size: 1.5em;
  border: 1px solid rgba(0, 0, 0, 0.12);
  margin: 0px;
  color: #000;
  font-weight: bold;
`;
