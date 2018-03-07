import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { MenuMusic } from 'ViewsMusic';
import { MenuCoding } from 'ViewsCoding';
import { FooterRightContentWrap } from 'ViewsHome';


import { defaultStyle, menuSlideStyle, HEADER_HEIGHT, zIndexTop, transFast } from 'styleConstants';

const FooterRightWrap = (props) => {
    const { match, location, smallMedia } = props;
    //absolute position drop down menu for mobile
    const mediaStyle = {
            position: 'absolute',
            top: HEADER_HEIGHT,
            zIndex: zIndexTop,
    }
    return (
        <TransitionGroup style={smallMedia ? {...mediaStyle} : {}}>
            <Transition key={match.params.route} timeout={transFast} mountOnEnter={false} unmountOnExit={true}>
                {(status) => (
                    <div style={{
                        ...defaultStyle,
                        ...menuSlideStyle[status],
                        whiteSpace: 'nowrap'
                    }}>
                        <Switch location={location}>
                            <Route path={`/:route/:subroute`} component={FooterRightContentWrap} />
                        </Switch>
                    </div>
                )}
            </Transition>
        </TransitionGroup>
    )
}
export default FooterRightWrap;