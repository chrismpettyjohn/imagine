import styled from "styled-components";

export const SiteSidebarElement = styled.div`
  background: ${({ theme }) => theme.color.s20};
  text-align: center;
  padding: ${({ theme }) => theme.space.oneUnit};
  
  .logo {
    border-bottom: ${({ theme }) => `1px solid ${theme.color.s60}`};
    margin-bottom: ${({ theme }) => theme.space.twoUnits};
    padding: ${({ theme }) => theme.space.halfUnit};
    img {
      height: 80px;
    }
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    color: ${({ theme }) => theme.color.s60};
    cursor: pointer;
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSize.threeUnits};
    margin-bottom: ${({ theme }) => theme.space.twoUnits};
    &:hover {
      color: ${({ theme }) => theme.color.s30};
    }
  }
`