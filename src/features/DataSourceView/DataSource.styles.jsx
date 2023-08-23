import styled from "@emotion/styled";

export const MainContainer = styled.div`
  display: flex;
  height: calc(100vh - 70px);
  background: #d9d9d9;
  padding: 32px;
  gap: 32px;
`;

export const LeftContainer = styled.div`
  flex: 0.5;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  color: black;
  gap: 20px;
  font-weight: 700;
`;

export const RightContainer = styled.div`
  flex: 0.5;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  color: black;
  gap: 20px;
  font-weight: 700;
  text-align: left;
  width: 100%;
`;
