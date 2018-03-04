import React from 'react';
import { BodyContentWrap, BodyCopySection, BodyImgSection } from 'CommonComponents/BodyContentSections';
import BackGroundImg from 'CommonComponents/DynamicBgImage';
import { selectedLight } from 'styleConstants';
import thePPImg from 'Assets/Images/matt-pence-photo.jpg';
import thePPImgPreLoad from 'Assets/Images/matt-pence-photo.jpg';

const ThePalePacific = () => {
    return (
        <BodyContentWrap>
            <BodyCopySection>
                <a style={{color: selectedLight, textDecoration: "none"}} target={"_blank"} href={"http://www.thepalepacific.com/"}><h2>The Pale Pacific</h2></a>
                <p>The Pale Pacific is a music project I started many years ago with my cousin.</p>
                <p>It has grown and evolved over the years with lots of members coming and going but mostly maintaining a core consisting of:
                    myself, my cousin &nbsp;
                    <span><a style={{color: selectedLight, textDecoration: "none"}} target={"_blank"} href={"https://www.fixedonapattern.com/"}>Gabe Archer</a></span>

                &nbsp; and Greg Swinehart &nbsp;
                    <span><a style={{color: selectedLight, textDecoration: "none"}} target={"_blank"} href={"http://sleepingindustries.com/"}>Greg Swinehart</a></span>
                </p>
            </BodyCopySection>
            <BodyImgSection>
                <BackGroundImg backgroundPlacement={"contain"} image={thePPImg} link={"http://www.thepalepacific.com/"} />
            </BodyImgSection>
        </BodyContentWrap>
    )
}
export default ThePalePacific;