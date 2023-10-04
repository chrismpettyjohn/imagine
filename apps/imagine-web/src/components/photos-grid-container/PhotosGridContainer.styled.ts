import styled from "styled-components";

export const PhotosGridContainerElement = styled.div`
    display: grid;
    grid-template-columns: 1fr 8fr 1fr;
    align-items: center;
    grid-gap: 0.75em;
`

export const PhotosGridContainerPagination = styled.div`
    background-color: #fff;
    width: 3em;
    height: 3em;
    margin: auto;
    border: 3px solid #f2f2f2;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1em;
  `

export const PhotosGridContainerContent = styled.div`
    white-space: nowrap;
    display: flex;
    overflow: hidden;
    gap: 1em;
`

export const PhotosGridContainerChild = styled.div`
    height: 5em;
    width: 5em;
    background-color: #fff;
    display: inline-block;
    border-radius: 2em;
    position: relative;
    flex: 1 0 13%;
    border: 3px solid #f2f2f2;
    overflow: hidden;
    img {
        cursor: pointer;
        opacity: 0.9;
        &:hover {
            opacity: 1;
        }
    }
`;
