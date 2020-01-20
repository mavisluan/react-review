import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ParamsHome from './ParamsHome';
import Redirect from '../useHistoryHook/Redirect';
import HistoryHome from '../useHistoryHook/HistoryHome';

const ParamsApp = () => (
  <Router>
    <Switch>
      <Route path="/redirect">
        <Redirect />
      </Route>
      <Route path="/historyhome">
        <HistoryHome />
      </Route>
      <Route path="/:id">
        {/* when route matches /:id, render <ParamsHome /> */}
        <ParamsHome />
      </Route>

      <Route path="/">
        <h4 className="text-primary p-5">
          Change the URL to /:id pattern to see the value of the parameter{' '}
        </h4>
        <h4 className="text-primary p-5">
          Change the URL to /historyhome to check useHistory() redirect
        </h4>
      </Route>
    </Switch>
  </Router>
);

ParamsApp.propTypes = {};

export default ParamsApp;
