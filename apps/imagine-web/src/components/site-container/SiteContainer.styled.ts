import styled from "styled-components";

export const SiteContainerElement = styled.div`
  overflow: auto;
  height: 100%;
  min-height: 100%;
  width: 100%;
`

export const PageContainerElement = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth};
  overflow: hidden;
  padding: ${({ theme }) => theme.space.twoUnits};
`