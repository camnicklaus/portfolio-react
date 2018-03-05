import React from 'react';
import { BodyContentWrap, BodyCopySection, BodyImgSection, BodyTileSection } from 'CommonComponents/BodyContentSections';
import BackGroundImg from 'CommonComponents/DynamicBgImage';
import { selectedLight } from 'styleConstants';
import { blackAngelsImg, grouploveImg, walkmenImg, vanceJoyImg, pillarPointImg, boatImg } from 'CommonComponents/ImageLoader';


const MusicProduction = () => {
    // const { blackAngelsImage } = blackAngelsImg;
    return (
        <BodyContentWrap>
            <BodyCopySection>
                <a style={{color: selectedLight, textDecoration: "none"}} target={"_blank"} href={"http://www.thepalepacific.com/"}><h2>Great Heart Studio</h2></a>
                <p>I've had a passion for producing music since I began taking apart my dad's studio when I was a kid.</p>
                <p>I honed my craft by producing and recording my first band 'The Pale Pacific'.
                    over the years I've had the chance to work with some amazing musicians and producers:
                </p>
            </BodyCopySection>
            <BodyTileSection>
                <BackGroundImg
                    image={grouploveImg.grouploveImage}
                    // imagePreLoad={thePPImagePreLoad}
                    link={"http://www.grouplovemusic.com/"}
                    backgroundPlacement={"cover"}
                    overlayTitle="Grouplove" />
                <BackGroundImg
                    image={pillarPointImg.pillarPointImage}
                    // imagePreLoad={thePPImagePreLoad}
                    link={"http://pillarpointmusic.com/"}
                    backgroundPlacement={"cover"}
                    overlayTitle="Pillar Point" />
                <BackGroundImg
                    image={blackAngelsImg.blackAngelsImage}
                    // imagePreLoad={thePPImagePreLoad}
                    link={"http://theblackangels.com/"}
                    backgroundPlacement={"cover"}
                    overlayTitle="The Black Angels" />
                <BackGroundImg
                    image={walkmenImg.walkmenImage}
                    // imagePreLoad={thePPImagePreLoad}
                    link={"http://thewalkmen.com/"}
                    backgroundPlacement={"cover"}
                    overlayTitle="The Walkmen" />
                <BackGroundImg
                    image={vanceJoyImg.vanceJoyImage}
                    // imagePreLoad={thePPImagePreLoad}
                    link={"http://www.vancejoy.com/"}
                    backgroundPlacement={"cover"}
                    overlayTitle="Vance Joy" />
                <BackGroundImg
                    image={boatImg.boatImage}
                    // imagePreLoad={thePPImagePreLoad}
                    link={"http://www.ohnodisaster.com/boat/"}
                    backgroundPlacement={"cover"}
                    overlayTitle="B.O.A.T." />
            </BodyTileSection>
        </BodyContentWrap>
    )
}
export default MusicProduction;