import styled from "styled-components";

export const StoriesCardElement = styled.div`
  background:  ${({ theme }) => theme.color.s20};
  border-radius:  ${({ theme }) => theme.radius.twoUnits};
  display: flex;
  justify-content: center;
  flex: 1;
  gap: ${({ theme }) => theme.space.oneUnit};
  padding:  ${({ theme }) => theme.space.twoUnits};
`;