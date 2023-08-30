import styled from "styled-components";

export const UserGroupsContainerContainer = styled.div`
  background: ${({ theme }) => theme.color.s20};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  display: flex;
  flex: 1;
  gap: ${({ theme }) => theme.space.twoUnits};
  padding: ${({ theme }) => theme.space.twoUnits};
  
  h1 {
    font-size: ${({ theme }) => theme.fontSize.twoUnits};
  }
`