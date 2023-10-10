import styled from "styled-components";

export const SiteMobileHeaderElement = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.color.s40};
  border-bottom:${({ theme }) => `2px solid ${theme.color.s30}`};
  display: flex;
  flex: 1;
  margin-bottom: ${({ theme }) => theme.space.twoUnits};
  overflow: hidden;
  padding: ${({ theme }) => theme.space.oneUnit};


  ${({ theme }) => `
    @media (min-width: ${theme.breakPoints.tablet}) {
      display: none !important;
    }
  `}

  ul {
    flex: 1;
    list-style-type: none;
  }

  li {
    background: ${({ theme }) => theme.color.s40};
    border: ${({ theme }) => `2px solid ${theme.color.s30}`};
    cursor: pointer;
    padding: ${({ theme }) => theme.space.oneUnit};

    a {
      display: flex;
      flex: 1;
      color: ${({ theme }) => theme.color.s60};
      text-decoration: none;
      &:hover {
        background:${({ theme }) => theme.color.brand};
      }
    }
  }
`