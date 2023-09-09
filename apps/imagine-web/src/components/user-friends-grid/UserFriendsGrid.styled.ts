import styled from "styled-components";

export const UserFriendsGridContainer = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.oneUnit};
  grid-template-columns: auto auto auto auto; 

`
