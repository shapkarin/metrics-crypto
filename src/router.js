import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import { createBrowserHistory } from 'history';

const MyRouter = () => (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  </Router>
);

export default MyRouter;
