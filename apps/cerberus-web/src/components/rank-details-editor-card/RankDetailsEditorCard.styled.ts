import styled from "styled-components";

export const RankDetailsEditorCardPermissionsContainer = styled.div`
  background: ${({ theme }) => theme.color.s10};
  border: ${({ theme }) => `1px solid ${theme.color.s40}`};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.oneUnit};
  padding: ${({ theme }) => theme.space.twoUnits};
`