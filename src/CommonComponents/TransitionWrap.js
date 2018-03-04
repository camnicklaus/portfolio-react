import React from 'react';
import { Transition } from 'react-transition-group';

export default (props) => {
    const { children, timing = 1000, direction, unmountOnExit = true, addStyles, ...rest } = props;
    // console.log('trans: ', props.position)
    // const { defaultStyle, transStyle } = transitionStyles;
    let dir;
    // switch (direction) {
    //     case 'left':
    //     dir = 'X(-';
    //     break;
    //     case 'up':
    //     dir = 'Y(-';
    //     break;
    //     case 'down':
    //     dir = 'Y(';
    //     break;
    //     default:
    //     dir = 'X(';
    // }
    direction === "left" ? dir = "-" : dir = "";
    const defaultStyle = {
        transition: `all ${timing}ms linear`,
        opacity: 0,
        // position: props.position,
        transform: `translateX(${dir}20%)`,
    }
    const transStyle = {
        entering: {
            position: props.transitioningPosition,
            // position: "absolute",
            opacity: 0,
            transform: `translateX(${dir}20%)`
        },
        entered: {
            opacity: 1,
            transform: "translateX(0)",
            // transform: "translateY(0)"
        },
        exiting: {
            position: props.transitioningPosition,
            // position: "absolute",
            opacity: 0,
            transform: `translateX(${dir}20%)`
        }
    }
    return (
        <Transition {...rest} timeout={timing} mountOnEnter={true} unmountOnExit={unmountOnExit}>
            {(status) => {
                // console.log(status)
                return (
                    <div style={{
                        ...defaultStyle,
                        ...transStyle[status],
                        ...addStyles
                    }}>
                        {children}
                    </div>
                )
            }}
        </Transition>
    )
}