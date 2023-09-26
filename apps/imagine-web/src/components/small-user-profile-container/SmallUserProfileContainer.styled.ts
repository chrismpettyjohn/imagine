import styled from "styled-components";

export const SmallUserProfileContainerUserContainer = styled.div`
  background: ${({ theme }) => theme.color.s30};
  border:${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  color: ${({ theme }) => theme.color.s60};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 150px;
  overflow: hidden;
  width: 250px;
  &:hover {
      border:${({ theme }) => `2px solid ${theme.color.s60}`};
  }
`

export const SmallUserProfileContainerAvatarContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;
  height: 100%;
  img {
    height: 180px;
  }
`

export const SmallUserProfileContainerInformationWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
`

export const SmallUserProfileContainerInformationContainer = styled.div`
  align-items: center;
  background: black;
  display: flex;
  flex: 1;
  font-size: ${({ theme }) => theme.fontSize.oneUnit};
  gap: ${({ theme }) => theme.space.oneUnit};
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const SmallUserProfileContainerOnlineIndicator = styled.div<{ $online: boolean }>`
  background: ${({ $online }) => $online ? '#1B5E20' : '#C62828'};
  border-radius: 100%;
  display: flex;
  height: 25px;
  width: 25px;
`