import styled from "styled-components";

export const ArticleListContainerElement = styled.div`
  background:${({ theme }) => theme.color.s20};
  border:${({ theme }) => `1px solid ${theme.color.s40}`};
  border-radius:  ${({ theme }) => theme.radius.oneUnit};
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  flex: 1;
  gap: ${({ theme }) => theme.space.oneUnit};
  width: 100%;
`

export const ArticleListContainerImage = styled.img`
  height: 350px;
  width: 350px;
  object-fit: cover;
  flex-shrink: 0;
`

export const ArticleListContainerContent = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`

export const ArticleListContainerInformation = styled.div`
  color:  ${({ theme }) => theme.color.s60};
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.oneUnit};
  flex: 1;
  flex-direction: column;
  padding: ${({ theme }) => theme.space.oneUnit};
  width: 100%;
`

export const ArticleListContainerCategory = styled.div`
  color: ${({ theme }) => theme.color.s50};
  font-weight: 500;
`

export const ArticleListContainerTitle = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.twoUnits};
`

export const ArticleListContainerDescription = styled.div`
  color:  ${({ theme }) => theme.color.s60};
  font-size: ${({ theme }) => theme.fontSize.halfUnit};
  height: 80%;
`

export const ArticleListContainerAuthor = styled.div`
  align-items: center;
  background:  ${({ theme }) => theme.color.s30};
  border-radius:  ${({ theme }) => theme.radius.oneUnit};
  display: flex;
  flex: 1;
  margin-top: ${({ theme }) => theme.space.oneUnit};
  padding: ${({ theme }) => theme.space.oneUnit};
  gap: ${({ theme }) => theme.space.oneUnit};
`

export const ArticleListContainerAuthorAvatar = styled.img`
  height: 64px;
`