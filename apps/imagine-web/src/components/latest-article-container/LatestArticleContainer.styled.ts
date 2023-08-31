import styled from "styled-components"

export const LatestArticleContainerElement = styled.div`
  border:${({ theme }) => `1px solid ${theme.color.s40}`};
  border-radius:  ${({ theme }) => theme.radius.oneUnit};
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.oneUnit};
  width: 100%;
`

export const LatestArticleImage = styled.img`
  height: 250px;
  width: 100%;
`

export const LatestArticleInformation = styled.div`
  background:  ${({ theme }) => theme.color.s20};
  display: flex;
  justify-content: center;
  flex: 1;
  gap: ${({ theme }) => theme.space.oneUnit};
  width: 100%;
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