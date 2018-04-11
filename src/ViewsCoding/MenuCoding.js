import React, { Component } from 'react';
import { MenuContentWrapLg, MenuContentWrapSm } from 'CommonComponents/MenuWrappers';
import { MyMenuLink, MyMenuLinkStyleOnly } from 'CommonComponents/CustomLinks';
import { ProjectDetailMenuToggle } from 'CommonComponents/ProjectDetailMenuToggle';

const MenuCoding = (props) => {
    // console.log('sidebarmusic: ', this.props)
    const { match, menuActive, smallMedia, menuClick } = props;
    return !smallMedia ? (
        <MenuContentWrapLg>
            <MyMenuLink to={`${match.url}/home`}>About</MyMenuLink>
            <ProjectDetailMenuToggle match={match}>
                <MyMenuLink to={`${match.url}/subscribly`}>Subscribly</MyMenuLink>
                <MyMenuLink to={`${match.url}/atavus`}>Atavus</MyMenuLink>
            </ProjectDetailMenuToggle>
        </MenuContentWrapLg>
    ) : (
        <MenuContentWrapSm menuActive={menuActive}>
            <MyMenuLink smallMedia={smallMedia} onClick={menuClick} to={`${match.url}/home`}>About</MyMenuLink>
            <MyMenuLink smallMedia={smallMedia} onClick={menuClick} to={`${match.url}/subscribly`}>Subscribly</MyMenuLink>
            <MyMenuLink smallMedia={smallMedia} onClick={menuClick} to={`${match.url}/atavus`}>Atavus</MyMenuLink>
        </MenuContentWrapSm>
    )
}
export default MenuCoding;
