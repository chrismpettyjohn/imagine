import styled from "styled-components";

const StatsContainerElement = styled.div`
  background: ${({ theme }) => theme.color.s30};
  border:${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  color: ${({ theme }) => theme.color.s10};
  display: flex;
  flex: 1;
  font-weight: 500;
  font-size:  ${({ theme }) => theme.fontSize.oneUnit};
  gap: ${({ theme }) => theme.space.twoUnits};
  padding: ${({ theme }) => theme.space.twoUnits};

  img {
    display: flex;
    width: 30px;
    height: 30px;
  }

  &:hover {
    border:${({ theme }) => `2px solid ${theme.color.s30}`};
  }
`

export const CreditStatsContainerElement = styled(StatsContainerElement)`
  background: #E0B246;
`

export const PixelStatsContainerElement = styled(StatsContainerElement)`
  background: #A55CA0;
`

export const DiamondStatsContainerElement = styled(StatsContainerElement)`
  background: #588e84;
`

export const HabboClubStatsContainerElement = styled(StatsContainerElement)`
  background: #4a3b17;
`