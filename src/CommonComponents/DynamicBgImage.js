import React, { Component } from 'react';
import { UnstyledATag } from 'CommonComponents/CustomLinks';
import styled from 'styled-components';
import { selectedLight, black, transFast, transMd } from 'styleConstants';

const BackGroundImgStyle = styled(UnstyledATag)`
    padding-bottom: ${props => (props.imgRatio + '%')};
    height: ${props => (props.height + '%')};
    position: relative;
`;
const ImgHolder = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    /* top: 0;
    right: 0;
    bottom: 0;
    left: 0; */
    box-shadow: inset 0 0 1px ${black};
    box-sizing: border-box;
    border-radius: 3px;
    background: url(${props => props.image}) center / ${props => props.backgroundPlacement} no-repeat;
`;
const ImgOverlay = styled.div`
    transition: all ${transMd}ms;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    &:hover {
        opacity: 1;
    }
`;
const TitleOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: x-large;
`;
const BackgroundOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: gray;
    opacity: 0.6;
`;
const IMAGE = styled.div`
    height: 100%;
    background: url(${props => props.image}) center / contain no-repeat;
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
                    preLoadImg: imagePreLoad
                })
            }
        }
        if (!this.state.fullRezImg) {
            loading.onload = () => {
                this.setState({fullRezImg: image, imgRatio: (loading.height / loading.width * 100)})
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
        const { link, backgroundPlacement, overlayTitle } = this.props;
        const { fullRezImg, preLoadImg } = this.state;
        let img;
        fullRezImg ? img = fullRezImg : img = preLoadImg
        return (
            // <UnstyledATag href={link}>
                <BackGroundImgStyle
                    href={link}
                    target="_blank"
                    imgRatio={backgroundPlacement === 'cover' ? 0 : this.state.imgRatio}
                    height={backgroundPlacement === 'cover' ? 100 : 0}
                    >
                    <ImgHolder backgroundPlacement={backgroundPlacement} image={img} />
                    {overlayTitle && <ImgOverlay>
                        <BackgroundOverlay />
                        <TitleOverlay>
                            {overlayTitle}
                        </TitleOverlay>
                    </ImgOverlay>}


                </BackGroundImgStyle>

            // </UnstyledATag>
        )
    }
}
export default BackGroundImg;