import styled from "styled-components";

export const FurnitureValueGridContainerElement = styled.div`
  background: ${({ theme }) => theme.color.s30};
  border:${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  cursor: pointer;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
  padding: ${({ theme }) => theme.space.oneUnit};
  height: 350px;
  &:hover {
    border-color: ${({ theme }) => theme.color.s50};
  }
`

export const FurnitureValueGridContainerStatElement = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.color.s40};
  border:${({ theme }) => `2px solid ${theme.color.s50}`};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  display: flex;
  flex: 1;
  overflow: hidden;
  padding: ${({ theme }) => theme.space.oneUnit};
  justify-content: space-between;
  &:hover {
    border-color: ${({ theme }) => theme.color.s60};
  }
`