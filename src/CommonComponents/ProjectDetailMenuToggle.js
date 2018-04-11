import React, { Component } from 'react';
import { MyMenuLinkStyleOnly } from 'CommonComponents/CustomLinks';

export class ProjectDetailMenuToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: false
        };
    };
    _onClick = () => {
        this.setState((state) => ({links: !state.links}));
    }
    render() {
        const { match, children } = this.props;
        return this.state.links ? (
            <React.Fragment>
                {children}
                <MyMenuLinkStyleOnly onClick={() => this._onClick()}>X</MyMenuLinkStyleOnly>
            </React.Fragment>
        ) : (
            <MyMenuLinkStyleOnly onClick={() => this._onClick()}>Project Detail</MyMenuLinkStyleOnly>
        )
    }
};