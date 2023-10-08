import styled from "styled-components";

export const GroupGridContainerElement = styled.div`
  background-color: ${({ theme }) => theme.color.s40};
  border-radius: 2em;
  min-height: 17em;
  text-decoration: unset;
  color: #000;  
  cursor: pointer;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`

export const GroupGridContainerBanner = styled.div`
  height: 5em;
  border-radius: 2em 2em 0 0;
  background: url(/img/user-header.png);
  background-size: auto;
  position: relative;
  margin-bottom: 2.25em;
  background-position: center; 
   
`

export const GroupGridContainerBadgeContainer = styled.div`
  background: #f0f0f0;
  width: 6em;
  height: 6em;
  bottom: -2.5em;
  box-shadow: 0 0 0 3pt rgba(255,255,255,.75);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2em;
  overflow: hidden;
  img {
    position: absolute;
    top: 45%;
    left: 48%;
    transform: translate(-50%,-50%);
    height: 70px;
  }
`


export const GroupGridContainerInformationContainer = styled.div`
  padding: 1em;
`

export const GroupGridNameContainer = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.color.brand};
  margin-top: 0.5em;
`

export const GroupGridUserCountContainer = styled.div`
  margin-top: 0.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const GroupGridMottoContainer = styled.div`
  font-weight: lighter;
  font-style: italic;
  word-break: break-word; 
  margin-top: 0.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
`
