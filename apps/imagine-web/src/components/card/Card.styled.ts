import styled from "styled-components";

export const CardElement = styled.div`
  background: ${({ theme }) => theme.color.s20};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.oneUnit};
  width: 100%;
`

export const CardContent = styled(CardElement)`
  padding: ${({ theme }) => theme.space.twoUnits};
`

export const CardHeader = styled.div`
    font-size: ${({ theme }) => theme.fontSize.twoUnits};
    font-weight: 700;
`