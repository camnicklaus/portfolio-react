import React from 'react';
import { BodyContentWrap, BodyCopySection, BodyImgSection } from 'CommonComponents/BodyContentSections';
import BackGroundImg from 'CommonComponents/DynamicBgImage';
import { selectedLight } from 'styleConstants';
import {summerAngelImg} from 'CommonComponents/ImageLoader';


const BeachLights = () => {
    const { summerAngelImage, summerAngelImagePreLoad } = summerAngelImg;
    return (
        <BodyContentWrap>
            <BodyCopySection>
                <h2>Beach Lights</h2>
                <p>Beach lights is a music project that I started in 2015. It's just simple fun pop/rock music</p>
                <p>Initially intended for licensing purposes, I wound up liking it more than I thought and decided to self release it.</p>
            </BodyCopySection>
            <BodyImgSection>
                <BackGroundImg backgroundPlacement={"contain"} image={summerAngelImage} imagePreLoad={summerAngelImagePreLoad} />
            </BodyImgSection>
        </BodyContentWrap>
    )
}
export default BeachLights;