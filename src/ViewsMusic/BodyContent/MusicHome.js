import React from 'react';
import { BodyContentWrap, BodyCopySection, BodyImgSection } from 'CommonComponents/BodyContentSections';
import BackGroundImg from 'CommonComponents/DynamicBgImage';
import { selectedLight } from 'styleConstants';
import {camFamImg} from 'CommonComponents/ImageLoader';

const MusicHome = () => {
    const { camFamImage, camFamImagePreLoad } = camFamImg;
    return (
        <BodyContentWrap>
            <BodyCopySection>
                <a style={{color: selectedLight, textDecoration: "none"}} target={"_blank"} href={"http://www.cameronnicklaus.com/"}><h2>Cameron Nicklaus</h2></a>
                <p>Here's me and my adorable family.</p>
                <p>I've been transitioning from the music industry to coding and web/app development lately...</p>
                <p>My wife &nbsp;
                    <span><a style={{color: selectedLight, textDecoration: "none"}} target={"_blank"} href={"http://ruthienicklaus.com/"}>Ruthie Nicklaus</a></span>
                    &nbsp; has been working hard on her childrens book drawings!
                </p>
            </BodyCopySection>
            <BodyImgSection>
                <BackGroundImg backgroundPlacement={"contain"} image={camFamImage} imagePreLoad={camFamImagePreLoad} link={"http://www.cameronnicklaus.com/"}>
                </BackGroundImg>
            </BodyImgSection>
        </BodyContentWrap>
    )
}
export default MusicHome;