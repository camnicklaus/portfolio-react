import React, {Component} from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
// styles
import {black, white, transMd, MEDIA_MOBILE} from 'styleConstants';

const EntryContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    box-sizing: border-box;
    font-size: xx-large;
    @media (max-width: ${MEDIA_MOBILE}px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`;
const MyLink = styled(Link)`
    background-color: ${props => props.bgcolor};
    color: ${props => props.textcolor};
    display: grid;
    justify-content: center;
    align-items: center;
    transition: all ${transMd}ms;
    text-decoration: none;
`;

const SplashContainer  = (props) => {
    const {onMouseEnter, bgcolor, textcolor, onClick, children, to = "/"} = props;
    return (
        <MyLink
            to={to}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            bgcolor={bgcolor}
            textcolor={textcolor}
        >
            {children}
        </MyLink>
    );
}

class SplashEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codingbgcolor: white,
            codingtextcolor: black,
            musicbgcolor: black,
            musictextcolor: white,
        }
    }
    _mouseEnter = (ref) => {
        if (ref === "coding") {
            this.setState({
                codingbgcolor: white,
                codingtextcolor: black,
                musicbgcolor: black,
                musictextcolor: white,
            })
        }
        if (ref === "music") {
            this.setState({
                codingbgcolor: black,
                codingtextcolor: white,
                musicbgcolor: white,
                musictextcolor: black,
            })
        }
    }

    render() {
        const {match} = this.props;
        const {codingbgcolor, codingtextcolor, musicbgcolor, musictextcolor} = this.state;
        return (
            <EntryContainer>
                <SplashContainer
                    onMouseEnter={() => this._mouseEnter("coding")}
                    to={`/coding`}
                    bgcolor={codingbgcolor}
                    textcolor={codingtextcolor}
                >
                    Coding
                </SplashContainer>
                <SplashContainer
                    onMouseEnter={() => this._mouseEnter("music")}
                    to={`/music`}
                    bgcolor={musicbgcolor}
                    textcolor={musictextcolor}
                >
                    Music
                </SplashContainer>
            </EntryContainer>
        )
    }

}

export default SplashEntry;