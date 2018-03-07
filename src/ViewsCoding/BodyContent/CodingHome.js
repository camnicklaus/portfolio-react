import React from 'react';
import MediaQuery from 'react-responsive';
import { BodyContentWrap, BodyCopySection, BodyImgSection, BodyTileSection, BodyTitleSection } from 'CommonComponents/BodyContentSections';
import BackGroundImg from 'CommonComponents/DynamicBgImage';
import {
    selectedLight,
    zIndexMid,
    PADDING,
    transFast,
    transMd,
    white,
    black,
    HEADER_HEIGHT
} from 'styleConstants';
import {
    camPortfolioImg,
    githubImg,
    codepenImg,
    zulabedImg,
    subscriblyImg,
    atavusImg,
    ruthieImg
} from 'CommonComponents/ImageLoader';
import styled from 'styled-components';

const ImageWrap = styled.div`
    width: 100%;
    height: 200px;
    /* padding: ${PADDING}px; */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImageMask = styled.div`
    background: ${selectedLight};
    border-radius: 20px;
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.1;
`;

const ProfileImg = styled.div`
    position: absolute;
    width: calc(100% - ${PADDING}px);
    max-width: 260px;
    height: calc(100% - ${PADDING}px);
    z-index: ${zIndexMid};
    box-sizing: border-box;
    border-radius: 20px;
    box-shadow: inset 0 0 1px ${black}, 0 0 30px -8px black;
    background: url(${props => props.image}) center / ${props => props.backgroundPlacement} no-repeat;
`;
const SectionContainer = styled.section`
    display: flex;
    flex-flow: row wrap;
`;
const Section = styled.div`
    flex: 1;
    /* max-width: 500px; */
    min-width: 260px;
`;
const Ul = styled.ul`
    display: flex;
    flex-flow: wrap column;
    max-height: 100px;
    list-style: none;
    font-size: smaller;
    padding-left: ${PADDING}px;
    border-left: 1px solid ${selectedLight};
`;
const DynamicText = styled.h3`
    text-decoration: underline;
    &:before {
        content: "${props => props.LgMediaText}";
    }
    @media (max-width: 767px) {
        &:before {
            content: "${props => props.SmMediaText}";
        }
        &:after {
            content: ":";
        }
    }
`;
const CodingHome = () => {

    return (
        <BodyContentWrap>
            <BodyCopySection>
                <ImageWrap>
                    <ProfileImg
                        image={camPortfolioImg.camPortfolioImage}
                        backgroundPlacement={"cover"}
                    />
                    <ImageMask />

                </ImageWrap>
                <h2 style={{textAlign: 'center'}}>About me...</h2>
                <p style={{textAlign: 'center'}}>I loved computers, programming, anything "tech" as a kid. That, and a love of music is what drew me to audio production.
                It's amazing to come back to the coding world now and have access to unlimited resources to learn and grow!
                I love problem solving, working with a team, and learning new things.</p>
                <SectionContainer>
                    <Section>
                        <h3 style={{textDecoration: 'underline'}}>Proficient with:</h3>
                        <Ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SCSS</li>
                            <li>Vanilla Javascript</li>
                            <li>Jquery</li>
                            <li>React</li>
                            <li>React Native</li>
                            <li>Redux</li>
                            <li>Git/Github</li>
                            <li>HTML</li>
                        </Ul>
                    </Section>
                    <Section>
                        <h3 style={{textDecoration: 'underline'}}>Some experience with:</h3>
                        <Ul>
                            <li>Ember</li>
                            <li>MongoDB</li>
                            <li>Node.js</li>
                            <li>Django</li>
                        </Ul>
                    </Section>
                </SectionContainer>
                <MediaQuery query="(max-width: 767px)">
                    <h3 style={{textDecoration: 'underline'}}>Recent projects:</h3>
                </MediaQuery>
                {/* <DynamicText LgMediaText="To the right" SmMediaText="Below"> are some recent projects</DynamicText> */}
            </BodyCopySection>
            <BodyTitleSection>
                <MediaQuery query="(min-width: 768px)">
                    <h3 style={{textDecoration: 'underline', textAlign: 'center', marginTop: 0}}>Recent projects:</h3>
                </MediaQuery>
            </BodyTitleSection>
            <BodyTileSection>

                <BackGroundImg
                    backgroundPlacement={"cover"}
                    image={subscriblyImg.subscriblyImage}
                    link={"https://www.subscribly.com/"}
                    overlayTitle={"Subscribly"}
                />
                <BackGroundImg
                    backgroundPlacement={"cover"}
                    image={atavusImg.atavusImage}
                    link={"http://football.atavus.com/"}
                    overlayTitle={"Functionality for Atavus football site"}
                />
                <BackGroundImg
                    backgroundPlacement={"cover"}
                    image={zulabedImg.zulabedImage}
                    link={"https://www.zulabed.com/Articles.asp?ID=263"}
                    overlayTitle={"Form Functionality for DestMark client, Zula Bed"}
                />
                <BackGroundImg
                    backgroundPlacement={"cover"}
                    image={ruthieImg.ruthieImage}
                    link={"http://ruthienicklaus.com/"}
                    overlayTitle={"Ruthie Nicklaus (illustrator)"}
                />
                <BackGroundImg
                    backgroundPlacement={"cover"}
                    image={githubImg.githubImage}
                    link={"https://github.com/camnicklaus"}
                    overlayTitle={"Github"}
                />
                <BackGroundImg
                    backgroundPlacement={"cover"}
                    image={codepenImg.codepenImage}
                    link={"https://codepen.io/camnicklaus/"}
                    backgroundColor={"black"}
                    overlayTitle={"Codepen"}
                />
            </BodyTileSection>
        </BodyContentWrap>
    )
}
export default CodingHome;