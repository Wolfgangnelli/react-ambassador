import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ProductsFrontend from '../pages/ProductsFrontend';
import Profile from '../pages/Profile';

const routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={ProductsFrontend} />
            <Route path="/profile" component={Profile} />
        </Switch>
    )
}

export default routes;
