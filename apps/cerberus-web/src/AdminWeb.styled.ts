import styled from "styled-components";

export const SiteContainerElement = styled.div`
  display: flex;
  flex: 1;
  min-height: 100%;
  min-width: 100%;
`

export const PageContainerElement = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${({ theme }) => theme.space.twoUnits};
`