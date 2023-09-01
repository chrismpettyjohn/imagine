import styled from "styled-components";

export const UserProfileContainerElement = styled.div`
  background: url('https://i.imgur.com/bcSKOml.png');
  background-size: cover;
  background-position: bottom left;
  border-radius:  ${({ theme }) => theme.radius.oneUnit};
  color: ${({ theme }) => theme.color.s10};
  display: flex;
  gap: ${({ theme }) => theme.space.twoUnits};
  height: 100%;
  position: relative;
  width: 100%;
  
  h2 {
    font-size: ${({ theme }) => theme.fontSize.twoUnits};
    font-weight: bold;
  }
  span {
    color: ${({ theme }) => theme.color.s50};
    font-size: ${({ theme }) => theme.fontSize.oneUnit};
  }
`

export const UserProfileContainerContent = styled(UserProfileContainerElement)`
  padding: ${({ theme }) => theme.space.twoUnits};
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

export const BadgeContainerGrid = styled.div`
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  display: flex;  
  gap: ${({ theme }) => theme.space.twoUnits};
`
