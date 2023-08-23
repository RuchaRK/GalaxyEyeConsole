import styled from "@emotion/styled";

export const MainContainer = styled.div`
  display: flex;
  height: calc(100vh - 70px);
`;

export const LeftContainer = styled.div`
  flex: 0.4;
  display: flex;
  flex-direction: column;
  padding: 24px;
  justify-content: flex-start;
  gap: 32px;
  align-items: flex-start;
`;

export const InstructionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;

export const RightContainer = styled.div`
  flex: 0.6;
`;
