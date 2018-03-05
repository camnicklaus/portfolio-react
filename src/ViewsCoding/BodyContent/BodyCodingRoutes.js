import React from 'react';
import {Switch, Route } from 'react-router-dom';
import { CodingHome, Subscribly } from 'ViewsCoding';

const BodyCodingRoutes = ({location}) => (
    <Switch location={location}>
        <Route path={`/coding/home`} component={CodingHome} />
        <Route path={`/coding/subscribly`} component={Subscribly} />
    </Switch>
);
export default BodyCodingRoutes;