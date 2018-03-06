import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, Transition } from "react-transition-group";
import { transFast } from 'styleConstants';

import { BodyContentWrap } from 'ViewsHome';

const BodyWrap = (props) => {
    const { match, location } = props;
    const defaultStyle = {
        transition: `all ${transFast}ms linear`,
        opacity: 0,
        height: '100%'
    }
    const transStyle = {
        entering: {
            position: "absolute",
            opacity: 0,
        },
        entered: {
            opacity: 1,
        },
        exiting: {
            opacity: 0,
        }
    }
    return (
        <TransitionGroup style={{ height: '100%'}}>
            <Transition key={match.params.route} timeout={transFast} mountOnEnter={false} unmountOnExit={true}>
                {(status) => (
                    <div style={{
                        ...defaultStyle,
                        ...transStyle[status]
                    }}>
                        <Switch location={location}>
                            {match.isExact && <Redirect to={`${match.url}/home`} />}
                            <Route path={`/:route/:subroute`} component={BodyContentWrap} />
                        </Switch>
                    </div>
                )}
            </Transition>
        </TransitionGroup>
    )
}
export default BodyWrap;