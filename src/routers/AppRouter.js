import React, { Component } from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';

import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={GamePage} exact={true} />
        <Route path="/config" component={ConfigPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
