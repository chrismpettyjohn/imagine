import styled from "styled-components";


export const SiteHeaderElement = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.color.s20};
  border-bottom:${({ theme }) => `2px solid ${theme.color.s40}`};
  display: flex;
  flex: 1;
  margin-bottom: ${({ theme }) => theme.space.twoUnits};
  width: 100%;
`

export const SiteHeaderImage = styled.div`
  align-items: center;
  background-image: url(https://kubbo.city/assets/images/kasja_mepage_header.png);
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  min-height: 125px;
  width: 100%;
`

export const SiteHeaderContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.oneUnit};
  padding: ${({ theme }) => theme.space.oneUnit};
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  width: 100%;
`

export const SiteHeaderTools = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.color.s20}; 
  border-radius: ${({ theme }) => theme.radius.twoUnits}; 
  display: flex;
  object-align: center;
  gap: ${({ theme }) => theme.space.oneUnit};
  padding: ${({ theme }) => theme.space.halfUnit};
`

export const SiteHeaderNav = styled.div`
    display: flex;
    font-size: ${({ theme }) => theme.fontSize.oneUnit};
    font-weight: 500;
    gap: ${({ theme }) => theme.space.twoUnits};
    list-style-type: none;
    width: 100%;

    li, a {
      color: ${({ theme }) => theme.color.s60};
      text-decoration: none;

      &:hover {
        color: ${({ theme }) => theme.color.brand};
      }
    }
`

export const SiteHeaderNavigation = styled.div`
  display: flex;
  object-align: center;
  align-items: center;
`

export const SiteHeaderActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.oneUnit};
`
