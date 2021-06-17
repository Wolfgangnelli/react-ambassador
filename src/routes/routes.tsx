import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ProductsBackend from '../pages/ProductsBackend';
import ProductsFrontend from '../pages/ProductsFrontend';
import Profile from '../pages/Profile';
import Ranking from '../pages/Ranking';
import Stats from '../pages/Stats';

const routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={ProductsFrontend} />
            <Route path="/frontend" component={ProductsFrontend} />
            <Route path="/backend" component={ProductsBackend} />
            <Route path="/profile" component={Profile} />
            <Route path="/stats" component={Stats} />
            <Route path="/ranking" component={Ranking} />
        </Switch>
    )
}

export default routes;
