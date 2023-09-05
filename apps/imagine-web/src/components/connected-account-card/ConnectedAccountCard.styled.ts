import styled from "styled-components";

export const ConnectedAccountCardContainer = styled.div`
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

export const ConnectedAccountCardInformationContainer = styled.div<{ $connected: boolean }>`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  i {
    font-size: 48px;
    color: ${({ theme, $connected }) => $connected ? theme.color.s20 : theme.color.s60};
  }
`


export const ConnectedAccountCardStatusContainer = styled.div`
  align-items: center;
  background: black;
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;
  height: 100%;
`
