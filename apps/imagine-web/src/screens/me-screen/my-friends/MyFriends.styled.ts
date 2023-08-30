import styled from "styled-components";

export const MyFriendsContainer = styled.div`
  background: ${({ theme }) => theme.color.s20};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  padding: ${({ theme }) => theme.space.twoUnits};

  h1 {
    font-size: ${({ theme }) => theme.fontSize.twoUnits};
  }
`

export const MyFriendsGrid = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`

export const MyFriendUserContainer = styled.div`
  background: ${({ theme }) => theme.color.s30};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  color: ${({ theme }) => theme.color.s20};
  display: flex;
  flex-direction: column;
  position: relative;
  height: 150px;
  overflow: hidden;
  width: 150px;
`

export const MyFriendAvatarContainer = styled.img`
  position: absolute;
  top: 0px;
  left: 20px;
  width: 110px;
`

export const MyFriendInformationContainer = styled.div`
  background: black;
  display: flex;
  flex: 1;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`