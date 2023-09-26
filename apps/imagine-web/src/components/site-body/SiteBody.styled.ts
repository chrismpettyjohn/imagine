import { createGlobalStyle } from "styled-components";

export const SiteBody = createGlobalStyle`
 body, html, #root {
    background: ${({ theme }) => theme.color.s10};
    color: ${({ theme }) => theme.color.s60};
    font-family: '${({ theme }) => theme.fontFamily.primary};
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
 }
`