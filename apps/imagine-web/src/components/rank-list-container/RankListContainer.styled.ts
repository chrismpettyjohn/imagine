import styled from "styled-components";

export const RankListContainerElement = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.twoUnits};
  flex-direction: column;
  flex: 1;
  width: 100%;
`

export const RankListContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 75px;
    height: 75px;
  }
`

export const RankListContainerMembers = styled.div` 
  display: flex;
  gap: ${({ theme }) => theme.space.oneUnit};
`