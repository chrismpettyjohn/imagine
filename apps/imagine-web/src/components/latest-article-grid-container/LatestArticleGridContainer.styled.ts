import styled from "styled-components"

export const LatestArticleGridContainerElement = styled.div`
  background: ${({ theme }) => theme.color.s20};
  border:${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius:  ${({ theme }) => theme.radius.oneUnit};
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.oneUnit};
  width: 100%;
  &:hover {
    border-color: ${({ theme }) => theme.color.s30};
  }
`


export const LatestArticleImage = styled.img`
  height: 250px;
  width: 100%;
`

export const LatestArticleInformation = styled.div`
  color:  ${({ theme }) => theme.color.s50};
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
  padding: ${({ theme }) => theme.space.oneUnit};
`

export const LatestArticleInformationCategory = styled.span`
  color: ${({ theme }) => theme.color.s50};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.oneUnit};
`
export const LatestArticleInformationTitle = styled.h2`
  color: ${({ theme }) => theme.color.s60};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.twoUnits};
`