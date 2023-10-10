import styled from "styled-components";

export const RoomGridContainerElement = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.color.s40};
  border:${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  color: ${({ theme }) => theme.color.s20};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  overflow: hidden;
  padding: ${({ theme }) => theme.space.oneUnit};
  width: 250px;
  &:hover {
      border:${({ theme }) => `2px solid ${theme.color.s60}`};
  }
`
