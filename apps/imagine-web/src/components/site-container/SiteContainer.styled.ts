import styled from "styled-components";

export const SiteContainerElement = styled.div`
  overflow: auto;
  height: 100%;
  min-height: 100%;
  width: 100%;
`

export const PageContainerElement = styled.div`
  overflow: hidden;
  padding: ${({ theme }) => theme.space.twoUnits};
  max-width: ${({ theme }) => theme.maxWidth};
  min-height: calc(100% - 180px);
  width: 100%;
`