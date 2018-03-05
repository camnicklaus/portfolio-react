import React, { Component, PureComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, Transition } from "react-transition-group";
import MediaQuery from 'react-responsive';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faHome, faMusic, faCode, faBars } from '@fortawesome/fontawesome-free-solid';

import TransitionWrap from 'CommonComponents/TransitionWrap';
import styled from 'styled-components';

import { MyHeaderLink, MyHeaderNonLinkStyle } from "CommonComponents/CustomLinks";
// import BackGroundImg from 'CommonComponents/DynamicBgImage';

import { MusicPlayer, BeachLights, ThePalePacific, MusicHome, MusicProduction } from 'ViewsMusic';
import { HeaderComponent, BodyContentWrap } from 'ViewsHome';

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
export default class Home extends PureComponent {
    render() {
        const {match, location} = this.props;
        // console.log('home props: ', this.props, 'match : ', match);
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
}

const BodyWrap = (props) => {
    const { match, location } = props;
    const defaultStyle = {
        transition: `all ${transFast}ms linear`,
        opacity: 0,
        height: '100%'
    }
    const transStyle = {
        entering: {
            position: "absolute",
            opacity: 0,
        },
        entered: {
            opacity: 1,
        },
        exiting: {
            opacity: 0,
        }
    }
    return (
        <TransitionGroup style={{ height: '100%'}}>
            <Transition key={match.params.route} timeout={transFast} mountOnEnter={false} unmountOnExit={true}>
                {(status) => (
                    <div style={{
                        ...defaultStyle,
                        ...transStyle[status]
                    }}>
                        <Switch location={location}>
                            {match.isExact && <Redirect to={`${match.url}/home`} />}
                            <Route path={`/:route/:subroute`} component={BodyContentWrap} />
                        </Switch>
                    </div>
                )}
            </Transition>
        </TransitionGroup>
    )
}