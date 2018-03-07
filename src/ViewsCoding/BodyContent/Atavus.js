// http://football.atavus.com/
import React from 'react';
import { BodyContentWrap, BodyCopySection, BodyImgSection } from 'CommonComponents/BodyContentSections';
import BackGroundImg from 'CommonComponents/DynamicBgImage';
import { selectedLight } from 'styleConstants';
import { atavus2Img } from 'CommonComponents/ImageLoader';

const Atavus = () => {
    return (
        <BodyContentWrap>
            <BodyCopySection>
                <a style={{color: selectedLight, textDecoration: "none"}} target={"_blank"} href={"http://atavus.com/"}><h2>Atavus</h2></a>
                <p>
                    Atavus is an innovative sports analytics team.
                </p>
                <p>
                    I worked with my good friend and amazing designer / developer
                    <span><a style={{color: selectedLight, textDecoration: "none"}} target={"_blank"} href={"http://www.braveappliance.com/"}> Zack Goehner </a></span>
                    to help implement functionality for the statistics displays and menus for the new Atavus football platform.
                </p>
            </BodyCopySection>
            <BodyImgSection>
                <BackGroundImg backgroundPlacement={"contain"} image={atavus2Img.atavus2Image} link={"http://football.atavus.com/"} />
            </BodyImgSection>
        </BodyContentWrap>
    )
}
export default Atavus;