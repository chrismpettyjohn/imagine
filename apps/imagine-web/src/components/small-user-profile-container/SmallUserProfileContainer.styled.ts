import styled from "styled-components";

export const SmallUserProfileContainerUserContainer = styled.div`
  background: ${({ theme }) => theme.color.s30};
  border:${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  color: ${({ theme }) => theme.color.s20};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 150px;
  overflow: hidden;
  width: 150px;
  &:hover {
      border:${({ theme }) => `2px solid ${theme.color.s60}`};
  }
`

export const SmallUserProfileContainerAvatarContainer = styled.img`
  position: absolute;
  top: 0px;
  left: 20px;
  width: 110px;
`

export const SmallUserProfileContainerInformationContainer = styled.div`
  background: black;
  display: flex;
  flex: 1;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`