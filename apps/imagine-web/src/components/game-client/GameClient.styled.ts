import styled from "styled-components";

export const GameClientElement = styled.div<{ $visible: boolean }>`
    background: black;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: ${({ $visible }) => $visible ? 'visible' : 'hidden'};
`