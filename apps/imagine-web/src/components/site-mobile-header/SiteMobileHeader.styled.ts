import styled from "styled-components";

export const SiteMobileHeaderElement = styled.div`
  background: ${({ theme }) => theme.color.s20};
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.oneUnit};
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth};

  @media only screen and (min-width: 1200px) {
    display: none !important;
  }

  ul {
    list-style-type: none;
  }

  li {
    background: ${({ theme }) => theme.color.s40};
    border: ${({ theme }) => `2px solid ${theme.color.s40}`};
    border-radus: ${({ theme }) => theme.radius.twoUnits};
    cursor: pointer;
    margin-bottom: ${({ theme }) => theme.space.oneUnit};
    padding: ${({ theme }) => theme.space.oneUnit};

    a {
      color: ${({ theme }) => theme.color.s60};
     text-decoration: none;
    }

    &:hover {
      border-color: ${({ theme }) => theme.color.brand};
      a {
        color: ${({ theme }) => theme.color.brand};
      }
    }
  }
`