import * as React from 'react';
const { IndexRoute, Route } = require('react-router');

import Login from '../login/login';
import Dashboard from '../dashboard/dashboard';
import ClientApp from '../queue/containers/app';

export default (
    <Route path="/" component={Login}>
        <IndexRoute component={Login} />
        <Route path="login" component={Login}/>
        <Route path="dashboard" component={Dashboard} />
        <Route path="queue/:queueId" component={ClientApp} />
    </Route>
);
