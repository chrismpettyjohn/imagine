import styled from "styled-components";

export const StatsContainerElement = styled.div`
  background: ${({ theme }) => theme.color.s30};
  border-radius: ${({ theme }) => theme.radius.twoUnits};
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
`