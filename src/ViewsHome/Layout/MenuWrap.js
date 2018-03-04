import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { MenuMusic } from 'ViewsMusic';
import { MenuCoding } from 'ViewsCoding';

import { defaultStyle, menuSlideStyle, HEADER_HEIGHT, zIndexTop, transFast } from 'styleConstants';

const MenuWrap = (props) => {
    const { match, location, smallMedia, menuActive, menuClick } = props;
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
                            <Route path={`/music`} render={props =>
                                (<MenuMusic {...props} menuActive={menuActive}  smallMedia={smallMedia} menuClick={menuClick} />)}
                            />
                            <Route path={`/coding`} render={props =>
                                (<MenuCoding {...props} menuActive={menuActive} smallMedia={smallMedia} menuClick={menuClick} />)}
                            />
                        </Switch>
                    </div>
                )}
            </Transition>
        </TransitionGroup>
    )
}
export default MenuWrap;