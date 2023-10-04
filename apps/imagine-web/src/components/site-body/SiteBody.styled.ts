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

 .goog-te-combo {
   background: ${({ theme }) => theme.color.s30};
   border-radius: ${({ theme }) => theme.radius.oneUnit};
   padding: ${({ theme }) => theme.space.halfUnit};
 }

 .goog-te-gadget {
  color: transparent;
  display: flex;
  flex-direction: column;
}

.goog-te-gadget img {
  display: none;

}

.goog-te-gadget a {
  display: none;
}

body {
  top: 0px !important;
}

.skiptranslate iframe {
  visibility: hidden !important;
}
`