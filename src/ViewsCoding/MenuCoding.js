import React from 'react';
import { MenuContentWrapLg, MenuContentWrapSm } from 'CommonComponents/MenuWrappers';
import { MyMenuLink } from 'CommonComponents/CustomLinks';

const MenuCoding = (props) => {
    // console.log('sidebarmusic: ', this.props)
    const { match, menuActive, smallMedia, menuClick } = props;
    return !smallMedia ? (
        <MenuContentWrapLg>
            <MyMenuLink to={`${match.url}/home`}>About</MyMenuLink>
            <MyMenuLink to={`${match.url}/subscribly`}>Subscribly</MyMenuLink>
        </MenuContentWrapLg>
    ) : (
        <MenuContentWrapSm menuActive={menuActive}>
            <MyMenuLink smallMedia={smallMedia} onClick={menuClick} to={`${match.url}/home`}>About</MyMenuLink>
            <MyMenuLink smallMedia={smallMedia} onClick={menuClick} to={`${match.url}/subscribly`}>Subscribly</MyMenuLink>
        </MenuContentWrapSm>
    )
}
export default MenuCoding;
