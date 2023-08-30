import styled from "styled-components";

export const SiteContainerElement = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  overflow: auto;
  width: 100%;
`

export const PageContainerElement = styled(SiteContainerElement)`
  max-width: ${({ theme }) => theme.maxWidth};
  overflow: hidden;
`