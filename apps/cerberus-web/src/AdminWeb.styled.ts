import styled from "styled-components";

export const SiteContainerElement = styled.div`
  display: flex;
  flex: 1;
  min-height: 100%;
  min-width: 100%;
`

export const PageContainerElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.twoUnits};
  padding: ${({ theme }) => theme.space.twoUnits};
  margin-left: ${({ theme }) => theme.components.sidebarWidth};
  width: ${({ theme }) => `calc(100% - ${theme.components.sidebarWidth})`};
`