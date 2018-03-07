import React from 'react';
import { BodyContentWrap, BodyCopySection, BodyImgSection } from 'CommonComponents/BodyContentSections';
import BackGroundImg from 'CommonComponents/DynamicBgImage';
import { selectedLight } from 'styleConstants';
import { subscribly2Img } from 'CommonComponents/ImageLoader';

const Subscribly = () => {
    return (
        <BodyContentWrap>
            <BodyCopySection>
                <a style={{color: selectedLight, textDecoration: "none"}} target={"_blank"} href={"https://www.subscribly.com/"}><h2>Subscribly</h2></a>
                <p>
                    Subscribly is an e-commerce platform that allows local businesses to provide bulk deals to consumers near them.

                </p>
                <p>
                    I worked on developing the app for iOS and Android using React Native.
                </p>
                <p>
                    I also helped finish up the web front end using Django.
                </p>
            </BodyCopySection>
            <BodyImgSection>
                <BackGroundImg backgroundPlacement={"contain"} image={subscribly2Img.subscribly2Image} link={"http://www.thepalepacific.com/"} />
            </BodyImgSection>
        </BodyContentWrap>
    )
}
export default Subscribly;