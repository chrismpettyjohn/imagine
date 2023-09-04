import styled from "styled-components";

export const CardElement = styled.div`
  background: ${({ theme }) => theme.color.s20};
  border:${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  width: 100%;
`

export const CardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.oneUnit};
  overflow: hidden;
  padding: ${({ theme }) => theme.space.twoUnits};
  h1 {
    font-size: ${({ theme }) => theme.fontSize.twoUnits};
    font-weight: 700;
  }
`

export const CardHeader = styled.div`
    font-size: ${({ theme }) => theme.fontSize.twoUnits};
    font-weight: 700;
`