import styled from "styled-components"

export const LatestArticleGridContainerElement = styled.div`
    background: ${({ theme }) => theme.color.s20};
    border: ${({ theme }) => `2px solid ${theme.color.s30}`};
    border-radius: 2em;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.space.twoUnits};
    text-decoration: none;
    position: relative;
    color: ${({ theme }) => theme.color.s60};
    padding: 1em;
    vertical-align: inherit;
    h3 {
      margin: 0;
    }
    span {
      color: ${({ theme }) => theme.color.s50};
      display: block;
      font-weight: 200;
    }
    &:hover {
      border-color: ${({ theme }) => theme.color.s40};
    }
`


export const LatestArticleImage = styled.img`
    min-width: 125px;
    width: 100%;
    height: 100%;
    border-radius: 1em;
    background-position: center;
    opacity: 0.9;
    &:hover {
      opacity: 1;
    }
`
