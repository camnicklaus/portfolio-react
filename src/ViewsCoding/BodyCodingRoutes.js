import React from 'react';
import {Switch, Route } from 'react-router-dom';
import { CodingHome, Subscribly, Atavus } from 'ViewsCoding';

const BodyCodingRoutes = ({location}) => (
    <Switch location={location}>
        <Route path={`/coding/home`} component={CodingHome} />
        <Route path={`/coding/subscribly`} component={Subscribly} />
        <Route path={`/coding/atavus`} component={Atavus} />
    </Switch>
);
export default BodyCodingRoutes;