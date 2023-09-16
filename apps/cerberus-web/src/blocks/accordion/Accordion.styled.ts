import styled from "styled-components";

export const AccordionElement = styled.div`
  display: flex;
  flex-direction: column;
`

export const AccordionContainer = styled.div`
  display: flex;
  flex: 1;
  padding: ${({ theme }) => theme.space.oneUnit};
  overflow: hidden;
`

export const AccordionHeaderElement = styled.div<{ $open: boolean }>`
  background:${({ theme }) => theme.color.s40};
  border-top:${({ theme }) => `2px solid ${theme.color.s50}`};
  border-bottom:${({ theme, $open }) => $open ? 'none' : `2px solid ${theme.color.s50}`};
  border-left:${({ theme }) => `2px solid ${theme.color.s50}`};
  border-right:${({ theme }) => `2px solid ${theme.color.s50}`};
  border-top-left-radius:  ${({ theme }) => theme.radius.oneUnit};
  border-top-right-radius:  ${({ theme }) => theme.radius.oneUnit};
  border-bottom-left-radius:  ${({ theme, $open }) => $open ? 0 : theme.radius.oneUnit};
  border-bottom-right-radius:  ${({ theme, $open }) => $open ? 0 : theme.radius.oneUnit};
  cursor: pointer;
  display: flex;
  font-size: 20px;
  flex: 1;
  &:hover {  
    font-size: 21px;
  }
`

export const AccordionContentElement = styled.div`
  background:${({ theme }) => theme.color.s40};
  border-bottom:${({ theme }) => `2px solid ${theme.color.s50}`};
  border-left:${({ theme }) => `2px solid ${theme.color.s50}`};
  border-right:${({ theme }) => `2px solid ${theme.color.s50}`};
  border-bottom-left-radius:  ${({ theme }) => theme.radius.oneUnit};
  border-bottom-right-radius:  ${({ theme }) => theme.radius.oneUnit};
`