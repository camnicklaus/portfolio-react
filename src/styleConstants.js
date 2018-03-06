// colors
export const primaryColor = "#fff";
export const primaryBgColor = "#"

export const black = "#292F36";
export const white = "#FBF5F3";
export const selectedLight = '#00bcd4'
export const atavasGray = '#3a4650';

export const blackRGB = (a) => (`rgba(41,47,54,${a || 1})`);
export const whiteRGB = (a) => (`rgba(251,245,243,${a || 1})`);

export const BASE_UNIT = 10;

// transitions
export const transFast = 200;
export const transMd = 400;
export const transSlow = 1000;
export const transDistance = BASE_UNIT * 5;

// layout

export const PADDING = BASE_UNIT;
export const buttonWidth = BASE_UNIT * 12;

export const HEADER_HEIGHT = BASE_UNIT * 4;
export const FOOTER_HEIGHT = BASE_UNIT * 4;

export const zIndexBottom = 0;
export const zIndexMid = 5;
export const zIndexTop = 10;

// media query

export const MEDIA_MOBILE = 767;

// transition styles

export const defaultStyle = {
    transition: `all ${transFast}ms`,
    opacity: 0,
    transform: `translateX(${transDistance}px)`
}
export const menuSlideStyle = {
    entering: {
        position: "absolute",
        opacity: 0,
        transform: `translateX(${transDistance}px)`
    },
    entered: {
        opacity: 1,
        transform: 'translateX(0)'
    },
    exiting: {
        opacity: 0,
        transform: `translateX(${transDistance}px)`
    }
}