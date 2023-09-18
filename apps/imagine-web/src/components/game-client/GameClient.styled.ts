import styled from "styled-components";

export const GameClientElement = styled.div<{ $visible: boolean }>`
    background: black;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    visibility: ${({ $visible }) => $visible ? 'visible' : 'hidden'};
`