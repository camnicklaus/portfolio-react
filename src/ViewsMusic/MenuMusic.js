import React from 'react';
import { MenuContentWrapLg, MenuContentWrapSm } from 'CommonComponents/MenuWrappers';
import { MyMenuLink } from 'CommonComponents/CustomLinks';
import { ProjectDetailMenuToggle } from 'CommonComponents/ProjectDetailMenuToggle';

const MenuMusic = (props) => {
    // console.log('sidebarmusic: ', this.props)
    const { match, menuActive, smallMedia, menuClick } = props;
    return !smallMedia ? (
        <MenuContentWrapLg>
            <MyMenuLink to={`${match.url}/home`}>About</MyMenuLink>
            <ProjectDetailMenuToggle match={match}>
                <MyMenuLink to={`${match.url}/the-pale-pacific`}>The Pale Pacific</MyMenuLink>
                <MyMenuLink to={`${match.url}/beach-lights`}>Beach Lights</MyMenuLink>
                <MyMenuLink to={`${match.url}/production`}>Music Production</MyMenuLink>
            </ProjectDetailMenuToggle>
            
        </MenuContentWrapLg>
    ) : (
        <MenuContentWrapSm menuActive={menuActive}>
            <MyMenuLink smallMedia={smallMedia} onClick={menuClick} to={`${match.url}/home`}>About</MyMenuLink>
            <MyMenuLink smallMedia={smallMedia} onClick={menuClick} to={`${match.url}/the-pale-pacific`}>The Pale Pacific</MyMenuLink>
            <MyMenuLink smallMedia={smallMedia} onClick={menuClick} to={`${match.url}/beach-lights`}>Beach Lights</MyMenuLink>
            <MyMenuLink smallMedia={smallMedia} onClick={menuClick} to={`${match.url}/production`}>Music Production</MyMenuLink>
        </MenuContentWrapSm>
    )
}

export default MenuMusic;