import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import {transFast } from 'styleConstants';

import TransitionWrap from 'CommonComponents/TransitionWrap';
import { FooterRightWrap } from 'ViewsHome';
import { MusicPlayer } from 'ViewsMusic';

import beachLightsTracks from 'Assets/Audio/beachLights';
import beachLightsTracksInfo from 'Assets/Audio/beachLights/beachLightsInfo.json';

const Footer = styled.div`
grid-area: Footer;
    /* display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
    "FooterLeft FooterCenter FooterRight"; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid yellow; */
`;
const FooterLeft = styled.div`
    /* grid-area: FooterLeft;
    display: grid; */
    flex: 1;
    /* border: 1px solid green; */
`;
// const FooterCenter = styled.div`
//     grid-area: FooterCenter;
//     display: grid;
// `;
const FooterRight = styled.div`
    /* grid-area: FooterRight;
    display: grid; */
    flex: 1;
    /* border: 1px solid purple; */
`;

const FooterComponent = ({location, ...rest}) => (
    <Footer gridArea={"Footer"}>
    <FooterLeft>
    </FooterLeft>
    {/* <FooterCenter>
    </FooterCenter> */}
    <FooterRight>
        <Route path={'/:route'} component={FooterRightWrap} />
    </FooterRight>
</Footer>
)
export default FooterComponent;

