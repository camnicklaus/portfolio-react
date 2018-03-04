import React from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import { MyLink } from 'CommonComponents/CustomLinks';
import {TransitionGroup, Transition} from 'react-transition-group';

// style
import { transFast } from 'styleConstants';

import SplashEntry from "ViewsHome/SplashEntry";
import Home from "ViewsHome/Home";

const App = (props) => {
  const { match, location } = props;
  const transTiming = transFast;
        // console.log('app props: ', props)
        const defaultStyle = {
            transition: `all ${transTiming}ms linear`,
            // border: '1px solid red',
            boxSizing: 'border-box',
            opacity: 0,
        }
        const transStyle = {
            entering: {
                position: "absolute",
                opacity: 0,
                transform: 'scale(1.1,1.1)'
            },
            entered: {
                opacity: 1,
                transform: 'scale(1,1)'
            },
            exiting: {
                opacity: 0,
                transform: 'scale(0.9,0.9)'
            }
        }
        let key = 'splash';
        if (location.pathname !== '/') key = 'app';
        return (
          <TransitionGroup>
          <Transition
                    key={key}
                    timeout={transTiming} mountOnEnter={false}
                    unmountOnExit={true}
                    appear={true}
                >
                    {(status) => {
                        return (
                            <div style={{
                                ...defaultStyle,
                                ...transStyle[status]
                            }}>
                                <Switch location={location}>
                                  <Route exact path="/" component={SplashEntry} />
                                  <Route path="/" component={Home} />
                                </Switch>
                            </div>
                        )
                    }}
                </Transition>
              </TransitionGroup>
        )
}

export default withRouter(App);