import styled from "styled-components";

export const SiteFooterElement = styled.footer`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  width: 100%;
  h2, h4 {
    color: ${({ theme }) => theme.color.s60};
    cursor: pointer;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.color.s30};
    }
  }
`