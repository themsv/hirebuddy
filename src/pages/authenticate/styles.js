import styled from "styled-components";

export const AuthenticateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 64px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SideInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
`;
