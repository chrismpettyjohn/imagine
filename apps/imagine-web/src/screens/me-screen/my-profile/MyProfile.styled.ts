import styled from "styled-components";

export const MyProfileContainer = styled.div`
  background: url('https://i.imgur.com/bcSKOml.png');
  background-size: cover;
  background-position: bottom left;
  color: ${({ theme }) => theme.color.s10};
  display: flex;
  gap: ${({ theme }) => theme.space.twoUnits};
  height: 100%;
  padding: ${({ theme }) => theme.space.twoUnits};
  position: relative;
  width: 100%;
  h2 {
    font-weight: bold;
  }
`

export const AvatarContainer = styled.img`
  width: 96px;
`

export const InformationContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  z-index: 3;
`

export const BadgeContainer = styled.div`
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  display: flex;  
  gap: ${({ theme }) => theme.space.twoUnits};
`

export const BadgeHolder = styled.div`
  background: ${({ theme }) => theme.color.s30};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  padding: ${({ theme }) => theme.space.quarterUnit};
`;
