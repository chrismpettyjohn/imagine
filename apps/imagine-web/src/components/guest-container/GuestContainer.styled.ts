import styled from "styled-components";

export const GuestContainerElement = styled.div`
  background: ${({ theme }) => theme.color.s20};
  border-radius: ${({ theme }) => theme.radius.twoUnits};
  border: ${({ theme }) => `2px solid ${theme.color.s30}`};
  padding: ${({ theme }) => theme.space.twoUnits};
  .guest-pic {
    border-radius: ${({ theme }) => theme.radius.twoUnits};
    object-fit: cover;
    height: 100%;
  }
  a {
    color: ${({ theme }) => theme.color.s60};
    text-decoration: none;
    opacity: 0.9;
    &:hover {
      opacity: 1;
    }
  }
`