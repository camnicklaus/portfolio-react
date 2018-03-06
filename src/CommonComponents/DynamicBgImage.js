import React, { Component } from 'react';
import { UnstyledATag } from 'CommonComponents/CustomLinks';
import styled from 'styled-components';
import { selectedLight, black, transFast, transMd, PADDING } from 'styleConstants';

const BackGroundImgStyle = styled(UnstyledATag)`
    padding-bottom: ${props => (props.imgRatio + '%')};
    height: ${props => (props.height + '%')};
    position: relative;
`;

const ImgHolder = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 1px ${black}, 0 0 30px -8px black;
    box-sizing: border-box;
    border-radius: 3px;
    background: url(${props => props.image}) center no-repeat;
    background-size: ${props => props.backgroundPlacement};
    background-color: ${props => props.backgroundColor};
`;
const TitleOverlay = styled.div`
    position: absolute;
    padding: ${PADDING}px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: x-large;
    opacity: 1;
    text-align: center;
`;
const BackgroundOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.7;

`;
const ImgOverlayWrap = styled.div`
    transition: all ${transFast}ms linear;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    &:hover {
        opacity: 1;
    }
`;
class BackGroundImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgRatio: 100,
            preLoadImg: null,
            fullRezImg: null
        }
    }
    componentWillMount() {
        // this.setImageRatio();
        const { image, imagePreLoad } = this.props;

        let loading = new Image();
        loading.src = image;
        const cached = loading.complete;

        if (!cached) {
            let preloading = new Image();
            preloading.src = imagePreLoad;
            preloading.onload = () => {
                this.setState({
                    imgRatio: (preloading.height / preloading.width * 100),
                    preLoadImg: imagePreLoad,
                    naturalWidth: preloading.naturalWidth,
                    naturalHeight: preloading.naturalHeight
                })
            }
        }
        if (!this.state.fullRezImg) {
            loading.onload = () => {
                this.setState({
                    imgRatio: (loading.height / loading.width * 100),
                    fullRezImg: image,
                    naturalWidth: loading.naturalWidth,
                    naturalHeight: loading.naturalHeight
                })
            }
        }
    }
    // getImgRatio = (src) => {
    //     return new Promise((resolve, reject) => {
    //         let img = new Image()
    //         img.onload = () => resolve(img.height / img.width * 100)
    //         img.onerror = reject
    //         img.src = src
    //     })
    // }
    // async setImageRatio() {
    //     const ratio = await this.getImgRatio(this.props.image);
    //     // console.log(ratio)
    //     this.setState({imgRatio: ratio})
    // }
    render() {
        const { link, backgroundPlacement, overlayTitle, backgroundColor } = this.props;
        const { fullRezImg, preLoadImg } = this.state;
        let img;
        fullRezImg ? img = fullRezImg : img = preLoadImg
        return (
                <BackGroundImgStyle
                    innerRef={el => this.imageDiv = el}
                    href={link}
                    target="_blank"
                    //use the cover vs contain bg image attr to determine placement
                    imgRatio={backgroundPlacement === 'cover' ? 0 : this.state.imgRatio}
                    height={backgroundPlacement === 'cover' ? 100 : 0}
                >
                    <ImgHolder
                        backgroundPlacement={backgroundPlacement}
                        backgroundColor={backgroundColor}
                        image={img}
                    />
                    {overlayTitle &&
                        <ImgOverlayWrap>
                            <BackgroundOverlay />
                            <TitleOverlay>
                                {overlayTitle}
                            </TitleOverlay>
                        </ImgOverlayWrap>}
                </BackGroundImgStyle>
        )
    }
}
export default BackGroundImg;