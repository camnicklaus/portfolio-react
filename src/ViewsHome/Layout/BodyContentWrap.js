import React, { Component } from 'react';
import { TransitionGroup, Transition } from "react-transition-group";
import {
    transMd,
} from 'styleConstants';

import { BodyCodingRoutes } from 'ViewsCoding';
import { BodyMusicRoutes } from 'ViewsMusic';


class BodyContentWrap extends Component {
    render() {
        const { match, location } = this.props;
        const transTiming = transMd;
        const defaultStyle = {
            boxSizing: 'border-box',
            opacity: 0,
            height: '100%',
        }
        const transStyle = {
            entering: {
                position: "absolute",
                transition: `opacity ${transTiming + 100}ms linear, transform ${transTiming}ms`,
                opacity: 0,
                transform: 'scale(1.1,1.1)'
            },
            entered: {
                transition: `opacity ${transTiming + 100}ms linear, transform ${transTiming}ms`,
                opacity: 1,
                transform: 'scale(1,1)'
            },
            exiting: {
                // position: 'absolute',
                transition: `opacity ${transTiming - 100}ms linear, transform ${transTiming}ms`,
                opacity: 0,
                transform: 'scale(0.9,0.9)'
            }
        }
        return (
            <TransitionGroup
                style={{
                    height: '100%',
                }}>
                <Transition
                    key={match.params.subroute}
                    timeout={transTiming} mountOnEnter={false}
                    unmountOnExit={true}
                >
                    {(status) => {
                        return (
                            <div style={{
                                ...defaultStyle,
                                ...transStyle[status]
                            }}>
                                {match.params.route === 'music' && <BodyMusicRoutes location={location} />}
                                {match.params.route === 'coding' && <BodyCodingRoutes location={location} />}
                            </div>
                        )
                    }}
                </Transition>
            </TransitionGroup>
        )
    }
}
export default BodyContentWrap;