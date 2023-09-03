import styled from "styled-components";

export const CommunityOnlinePlayersScreenUsersContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: ${({ theme }) => theme.space.twoUnits};
`