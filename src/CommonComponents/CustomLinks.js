import React from "react";
import {Link, NavLink} from "react-router-dom";
import styled from "styled-components";

import { white, PADDING, HEADER_HEIGHT, blackRGB, whiteRGB, transFast, transSlow, selectedLight } from "styleConstants";

export const UnstyledATag = styled.a`
    text-decoration: none;
    color: ${props => props.color || white};
    display: block;
`;

export const MyLink = styled(Link)`
    color: ${white};
    text-decoration: none;
`;
export const MyNavLin = styled(NavLink)`
    color: ${white};
    text-decoration: none;
    height: 100%;
`;

const MyHeaderLinkStyle = styled(NavLink)`
    /* transition: all ${transFast}; */
    color: ${white};
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 ${PADDING}px;
    &:hover {
        transition: all ${transFast};
        opacity: 0.7;
        color: ${selectedLight};
    }
    &.selected {
        transition: all ${transFast};
        color: ${selectedLight};
    }
`;
export const MyHeaderLink = ({activeClassName, ...props}) => (
        <MyHeaderLinkStyle {...props} activeClassName={`selected ${activeClassName}`} />
);

export const MyHeaderNonLinkStyle = styled.div`
    transition: all ${transFast};
    color: ${props => props.active ? selectedLight : white};
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 ${PADDING}px;
    &:hover {
        transition: all ${transFast};
        opacity: 0.7;
        color: ${selectedLight};
    }
`;
//different syntax to avoid react dom props error :-)
const MenuLink = styled(({smallMedia, children, ...rest}) => <NavLink {...rest}>{children}</NavLink>)`
    transition: all ${transFast}ms;
    //keep menu items from collapsing on mobile menu transition
    flex: 0 0 auto;
    color: ${white};
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${PADDING / 2}px;
    height: ${HEADER_HEIGHT}px;
    &:before {
        color: ${white};
        margin-right: ${PADDING}px;
        content: ${props => props.smallMedia ? "''" : "'|'"};
    }
    &:first-of-type:before {
        content: "";
    }
    &:last-of-type {
        padding-right: ${PADDING}px;
    }
    &:hover {
        transition: all ${transFast}ms;
        opacity: 0.7;
        color: ${props => props.smallMedia ? white : selectedLight};
    }
    &.selected {
        transition: all ${transFast}ms;
        color: ${selectedLight};
        background: ${props => props.smallMedia ? white : ''};
    }
`;
export const MyMenuLink = ({activeClassName, smallMedia, ...props}) => (
    <MenuLink {...props} smallMedia={smallMedia} activeClassName={`selected ${activeClassName}`} />
);