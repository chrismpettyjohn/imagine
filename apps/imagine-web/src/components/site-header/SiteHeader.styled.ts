import styled from "styled-components";

export const SiteHeaderElement = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.color.s20};
  border:${({ theme }) => `1px solid ${theme.color.s40}`};
  border-bottom-left-radius: ${({ theme }) => theme.radius.oneUnit};
  border-bottom-right-radius: ${({ theme }) => theme.radius.oneUnit};
  display: flex;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.space.twoUnits};
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