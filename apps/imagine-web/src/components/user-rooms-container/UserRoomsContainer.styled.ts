import styled from "styled-components";

export const UserRoomsContainerContainer = styled.div`
  background: ${({ theme }) => theme.color.s20};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  display: flex;
  flex: 1;
  gap: ${({ theme }) => theme.space.twoUnits};
  padding: ${({ theme }) => theme.space.twoUnits};
  width: 100%;
  
  h1 {
    font-size: ${({ theme }) => theme.fontSize.twoUnits};
  }
`