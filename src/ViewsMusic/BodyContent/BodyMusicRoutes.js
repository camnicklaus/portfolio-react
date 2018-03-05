import React from 'react';
import {Switch, Route } from 'react-router-dom';
import { MusicHome, ThePalePacific, BeachLights, MusicProduction } from 'ViewsMusic';

const BodyMusicRoutes = ({location}) => (
    <Switch location={location}>
        <Route path={`/music/home`} component={MusicHome} />
        <Route path={`/music/the-pale-pacific`} component={ThePalePacific} />
        <Route path={`/music/beach-lights`} component={BeachLights} />
        <Route path={`/music/production`} component={MusicProduction} />
    </Switch>
);
export default BodyMusicRoutes;