import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ProductsFrontend from '../pages/ProductsFrontend';

const routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={ProductsFrontend} />
        </Switch>
    )
}

export default routes;
