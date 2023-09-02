import styled from "styled-components";
import { Button } from "../button/Button";

export const SiteHeaderElement = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.color.s20};
  border:${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin-bottom: ${({ theme }) => theme.space.twoUnits};
  width: 100%;
`

export const SiteHeaderContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: ${({ theme }) => theme.space.twoUnits};
  width: 100%;

  ul {
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
        color: ${({ theme }) => theme.color.s30};
      }
    }
  }
`

export const SiteHeaderNavigation = styled.div`
  display: flex;
  flex: 1;
`

export const SiteHeaderActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.space.oneUnit};
`

export const SiteHeaderAdminPanelButton = styled(Button)`
  border-color: #7C0F0F;
  color: #7C0F0F;
  &:hover {
    border-color: #B90909;
    color: #B90909;
  }
`

export const SiteHeaderEnterHotelButton = styled(Button)`
border-color: ${({ theme }) => theme.color.s30};
color: ${({ theme }) => theme.color.s30};
&:hover {
    border-color: #1d97c4;
    color: #1d97c4;
}
`