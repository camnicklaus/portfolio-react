import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { MyHeaderLink, MyHeaderNonLinkStyle } from "CommonComponents/CustomLinks";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faHome, faMusic, faCode, faBars } from '@fortawesome/fontawesome-free-solid';

import { MenuWrap } from 'ViewsHome';

const Header = styled.div`
    grid-area: Header;
    display: flex;
`;
const HeaderLeft = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, min-content) auto;
    flex: 1;
`;
const NavLi = styled.li`

`;
const HeaderRight = styled.div`
    flex: 1;
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
export default HeaderComponent;