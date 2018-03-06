import React from 'react';
import { Route } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import TransitionWrap from 'CommonComponents/TransitionWrap';
import styled from 'styled-components';

import { MyHeaderLink, MyHeaderNonLinkStyle } from "CommonComponents/CustomLinks";
// import BackGroundImg from 'CommonComponents/DynamicBgImage';

import { MusicPlayer, BeachLights, ThePalePacific, MusicHome, MusicProduction } from 'ViewsMusic';
import { HeaderComponent, BodyContentWrap, BodyWrap } from 'ViewsHome';

// style constants
import {
    black,
    white,
    HEADER_HEIGHT,
    FOOTER_HEIGHT,
    transMd,
    transFast,
    transSlow,
    zIndexTop
} from 'styleConstants';

import beachLightsTracks from 'Assets/Audio/beachLights';
import beachLightsTracksInfo from 'Assets/Audio/beachLights/beachLightsInfo.json';

const PageWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: ${HEADER_HEIGHT}px auto ${FOOTER_HEIGHT}px;
    grid-template-areas:
        "Header"
        "Body"
        "Footer";
    max-width: 1100px;
    height: 100vh;
    margin: 0 auto;
`;

const Body = styled.div`
    grid-area: Body;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
`;
const Footer = styled.div`
    grid-area: Footer;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
        "FooterLeft FooterCenter FooterRight";
    justify-content: center;
    align-items: center;
`;
const FooterLeft = styled.div`
    grid-area: FooterLeft;
    display: grid;
`;
const FooterCenter = styled.div`
    grid-area: FooterCenter;
    display: grid;
`;
const FooterRight = styled.div`
    grid-area: FooterRight;
    display: grid;
`;
const Home = (props) => {
    const {match, location} = props;
    return (
        <PageWrap>
            <MediaQuery query="(max-width: 767px)">
                {matches => <HeaderComponent smallMedia={matches} />}
            </MediaQuery>
            <Body gridArea={"Body"}>
                <Route path={`/:route`} component={BodyWrap} />
            </Body>
            <Footer gridArea={"Footer"}>
                <FooterLeft>
                </FooterLeft>
                <FooterCenter>
                </FooterCenter>
                <FooterRight>
                    <TransitionWrap addStyles={{justifySelf: 'end'}} in={location.pathname === "/music/beach-lights"} timing={transFast}>
                        <MusicPlayer audioTracks={beachLightsTracks} tracksInfo={beachLightsTracksInfo} />
                    </TransitionWrap>
                </FooterRight>
            </Footer>
        </PageWrap>
    )
}
export default Home;