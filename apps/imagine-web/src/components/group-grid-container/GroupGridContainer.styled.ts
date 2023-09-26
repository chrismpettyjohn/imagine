import styled from "styled-components";

export const GroupGridContainerElement = styled.div`
  background: ${({ theme }) => theme.color.s30};
  border:${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  color: ${({ theme }) => theme.color.s20};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 150px;
  overflow: hidden;
  width: 250px;
  &:hover {
      border:${({ theme }) => `2px solid ${theme.color.s60}`};
  }
`

export const GroupGridContainerBadgeContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;
  height: 100%;
  img {
    height: 180px;
  }
`

export const GroupGridContainerInformationWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
`

export const GroupGridContainerInformationContainer = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.color.s30};
  display: flex;
  flex: 1;
  font-size: ${({ theme }) => theme.fontSize.oneUnit};
  gap: ${({ theme }) => theme.space.oneUnit};
  justify-content: center;
  width: 100%;
  height: 100%;
`
