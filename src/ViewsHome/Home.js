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
import { MenuWrap } from 'ViewsHome';

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

    /* @media (max-width: 767px) {
        grid-template-columns: 1fr;
        grid-template-areas:
        "Header "
        "Body "
        "Footer ";
    } */
`;
const Header = styled.div`
    grid-area: Header;
    display: flex;
`;
const HeaderLeft = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    /* display: flex; */
    display: grid;
    grid-template-columns: repeat(3, min-content) auto;
    flex: 1;
`;
const NavLi = styled.li`

`;
const HeaderRight = styled.div`
    flex: 1;
`;

const Body = styled.div`
    /* border: 1px solid yellow; */
    grid-area: Body;
    overflow: scroll;
`;
const Footer = styled.div`
    /* border: 1px solid yellow; */
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

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuActive: false
        }
    }
    _menuClick = () => {
        this.setState(state => ({menuActive: !state.menuActive}))
    }
    render() {
        // console.log("header component props: ", this.props)
        const { smallMedia } = this.props;
        return (
            <Header gridArea={"Header"}>
                <HeaderLeft>
                    <NavLi><MyHeaderLink exact to="/"><FontAwesomeIcon icon={faHome} /></MyHeaderLink></NavLi>
                    <NavLi><MyHeaderLink to={`/coding`}><FontAwesomeIcon icon={faCode} /></MyHeaderLink></NavLi>
                    <NavLi><MyHeaderLink to={`/music`}><FontAwesomeIcon icon={faMusic} /></MyHeaderLink></NavLi>
                    {smallMedia &&
                        <NavLi style={{justifySelf: 'end'}}>
                            <MyHeaderNonLinkStyle onClick={() => this._menuClick()} active={this.state.menuActive}>
                                <FontAwesomeIcon icon={faBars} />
                            </MyHeaderNonLinkStyle>
                        </NavLi>}

                    {smallMedia &&
                        <Route path={`/:route`} render={props => (
                            <MenuWrap {...props} smallMedia={smallMedia} menuActive={this.state.menuActive} menuClick={() => this._menuClick()} />
                        )} />}
                </HeaderLeft>

                {!smallMedia && <HeaderRight>
                    <Route path={`/:route`} component={MenuWrap} />
                </HeaderRight>}
            </Header>
        )
    }
}
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
    // console.log("body content: ", props)
    const defaultStyle = {
        transition: `all ${transFast}ms linear`,
        opacity: 0,
        height: '100%'
        // border: '3px solid pink',
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
        {/* <TransitionGroup> */}
            <Transition key={match.params.route} timeout={transFast} mountOnEnter={false} unmountOnExit={true}>
                {(status) => (
                    <div style={{
                        ...defaultStyle,
                        ...transStyle[status]
                    }}>
                        <Switch location={location}>
                            {match.isExact && <Redirect to={`${match.url}/home`} />}
                            <Route path={`/music/:subroute`} component={BodyMusic} />
                            <Route path={`/coding/:subroute`} component={BodyCoding} />
                        </Switch>
                    </div>
                )}
            </Transition>
        </TransitionGroup>
    )
}

class BodyMusic extends Component {
    render() {
        const { match, location } = this.props;
        const transTiming = transMd;
        // console.log('bodymusic content, params: ', match.params, 'match.url: ', match.url)
        const defaultStyle = {
            // border: '1px solid red',
            boxSizing: 'border-box',
            opacity: 0,
            height: '100%',
        }
        const transStyle = {
            entering: {
                position: "absolute",
                transition: `opacity ${transTiming + 100}ms linear, transform ${transTiming}ms`,
                opacity: 0,
                transform: 'scale(1.1,1.1)'
            },
            entered: {
                transition: `opacity ${transTiming + 100}ms linear, transform ${transTiming}ms`,
                opacity: 1,
                transform: 'scale(1,1)'
            },
            exiting: {
                // position: 'absolute',
                transition: `opacity ${transTiming - 100}ms linear, transform ${transTiming}ms`,
                opacity: 0,
                transform: 'scale(0.9,0.9)'
            }
        }
        return (
            <TransitionGroup
                style={{
                    // width: '100%',
                    height: '100%',
                    // border: '3px solid purple',
                    // boxSizing: 'border-box'
                }}>
                <Transition
                    key={match.params.subroute}
                    timeout={transTiming} mountOnEnter={false}
                    unmountOnExit={true}
                    // appear={true}
                >
                    {(status) => {
                        return (
                            <div style={{
                                ...defaultStyle,
                                ...transStyle[status]
                            }}>
                                <Switch location={location}>
                                    <Route path={`/music/home`} component={MusicHome} />
                                    <Route path={`/music/the-pale-pacific`} component={ThePalePacific} />
                                    <Route path={`/music/beach-lights`} component={BeachLights} />
                                    <Route path={`/music/production`} component={MusicProduction} />
                                </Switch>
                            </div>
                        )
                    }}
                </Transition>
            </TransitionGroup>
        )
    }
}
class BodyCoding extends Component {
    render() {
        const { match, location } = this.props;
        // console.log('bodycoding content, params: ', match.params, 'match.url: ', match.url)
        const defaultStyle = {
            transition: `opacity ${transSlow}ms , transform ${transMd}ms `,
            opacity: 0,
            height: '100%',
            // width: '100%',
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            backfaceVisibility: 'hidden',

        }
        const transStyle = {
            entering: {
                position: "absolute",
                opacity: 0,
                transform: 'scale(1.1,1.1)'
            },
            entered: {
                opacity: 1,
                transform: 'scale(1,1)'
            },
            exiting: {
                opacity: 0,
                transform: 'scale(0.9,0.9)'
            }
        }
        return (
            <TransitionGroup
                style={{
                    height: '100%',
                }}>
                <Transition
                    key={match.params.subroute}
                    timeout={transMd} mountOnEnter={false}
                    unmountOnExit={true}
                    // appear={true}
                >
                    {(status) => {
                        return (
                            <div style={{
                                ...defaultStyle,
                                ...transStyle[status]
                            }}>
                                <Switch location={location}>
                                    <Route path={`/coding/home`} component={CodingHome} />
                                    <Route path={`/coding/subscribly`} component={Subscribly} />
                                </Switch>
                            </div>
                        )
                    }}
                </Transition>
            </TransitionGroup>
        )
    }
}

// const MusicProduction = () => (
//     <div>music production stuff</div>
// )
// const MusicHome = () => (
//     <div>music home!!!!</div>
// )
const CodingHome = () => {
    // console.log("rendering body coding")
    return (
        <div style={{width: '100%', height: '100%'}}>Coding home!!!!</div>
    )
}
const Subscribly = () => (
    <a style={{textDecoration: 'none', color: white}} target="_blank" href="https://www.subscribly.com/">Subscribly</a>
)