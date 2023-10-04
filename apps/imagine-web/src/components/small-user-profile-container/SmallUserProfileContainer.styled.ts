import styled from "styled-components";

export const SmallUserProfileContainerUserContainer = styled.div`
  background: ${({ theme }) => theme.color.s30};
  border:${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  color: ${({ theme }) => theme.color.s20};
  cursor: pointer;
  position: relative;
  height: 285px;
  overflow: hidden;
  position: relative;
  width: 400px;
  &:hover {
      border:${({ theme }) => `2px solid ${theme.color.s60}`};
  }
`

export const SmallUserProfileContainerBanner = styled.div`
  background: url(https://habbox.fr/assets/images/index/index.png);
  background-size: cover;
  height: 80px;
  width: 100%;
`

export const SmallUserProfileContainerAvatarContainer = styled.div`
  background: ${({ theme }) => theme.color.s40};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  padding: ${({ theme }) => theme.space.oneUnit};
  height: 50px;
  width: 50px;
  overflow: hidden;
  img {
    height: 150px;
    margin-left: -20px;
    margin-top: -40px;
  }
  position: absolute;
  top: 40px;
  left: 40%;
`


export const SmallUserProfileContainerInformationContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  font-size: ${({ theme }) => theme.fontSize.oneUnit};
  gap: ${({ theme }) => theme.space.oneUnit};
  justify-content: center;
  margin-top: 40px;
  margin-right: -25px;
`

export const SmallUserProfileContainerOnlineIndicator = styled.div<{ $online: boolean }>`
  background: ${({ theme, $online }) => $online ? theme.color.green : theme.color.s50};
  border-radius: 100%;
  display: flex;
  height: 25px;
  width: 25px;
`
export const SmallUserProfileMottoContainer = styled.div`
  border-top: ${({ theme }) => `1px solid ${theme.color.s50}`};
  color: ${({ theme }) => theme.color.s50};
  text-align: center;
  margin: 0 auto;
  margin-top: -15px;
  padding: ${({ theme }) => theme.space.oneUnit};
  width: fit-content;
`

export const SmallUserProfileRankContainer = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.color.s40};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  color: ${({ theme }) => theme.color.s60};
  text-align: center;
  padding: ${({ theme }) => theme.space.halfUnit};
  margin: 0 auto;
  width: 150px;
  &:hover {
      border:${({ theme }) => `2px solid ${theme.color.s60}`};
  }
`