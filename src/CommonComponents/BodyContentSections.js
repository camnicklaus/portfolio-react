import styled from 'styled-components';
import { PADDING, MEDIA_MOBILE } from 'styleConstants';

export const BodyContentWrap = styled.div`
    display: grid;
    /* grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr); */
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
        'copy   img'
        'copy   img';
    @media (max-width: ${MEDIA_MOBILE}px) {
        grid-template-rows: auto 1fr;
        /* grid-auto-rows: minmax(395px, 1fr); */
        grid-template-areas:
        'copy   copy'
        'img    img';
    }
    height: 100%;
`;
export const BodyCopySection = styled.div`
    /* grid-area: 1 / 1 / 4 / 2; */
    grid-area: copy;
    padding: 0 ${PADDING}px;
    /* @media (max-width: 767px) {
        grid-area: 1 / 1 / 2 / 4;
    } */
`;
export const BodyImgSection = styled.div`
    /* grid-area: 1 / 2 / 3 / 4; */
    grid-area: img;
    padding: 0 ${PADDING}px;
    position: relative;
    /* @media (max-width: 767px) {
        grid-area: 2 / 1 / 4 / 4;
    } */
`;
export const BodyTileSection = styled.div`
    /* border: 1px solid red; */
    grid-area: img;
    padding: 0 ${PADDING}px;
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    /* grid-template-columns: repeat(auto-fit, 150px); */
    grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
    grid-auto-rows: minmax(300px, 1fr);
    grid-gap: ${PADDING * 2}px;


// `;