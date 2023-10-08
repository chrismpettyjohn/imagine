import styled from "styled-components";


const PREVIEW_OFFSET = '25px';

export const GameClientElement = styled.div<{ $visible: boolean, $preview: boolean }>`
    background: black;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    visibility: ${({ $visible, $preview }) => $visible || $preview ? 'visible' : 'hidden'};

    
    iframe {
        border: none;
    }

    ${({ theme, $visible, $preview }) => !$visible && $preview && `
        top: unset !important;
        bottom: ${PREVIEW_OFFSET} !important;
        left: unset !important;
        right: ${PREVIEW_OFFSET} !important;
        width: 400px;
        height: 200px;
        iframe {
         border-radius: ${theme.radius.twoUnits};
        }
    `}
    .content {
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .preview-overlay {
        background: ${({ theme }) => theme.color.s10};
        border-radius: ${({ theme }) => theme.radius.twoUnits};
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 2000;
        opacity: 0.75;
        padding: ${({ theme }) => theme.space.oneUnit};
    }
    
    iframe {
        border: none;
    }
`