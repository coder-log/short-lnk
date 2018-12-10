import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import Login from './../imports/ui/Login';
import Signup from './../imports/ui/Signup';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

window.browserHistory = history;


const routes = (
  <Router>
    <Switch>
      <Route exact path = "/" component = {Login} />
      <Route exact path = "/signup" component = {Signup} />
      <Route exact path = "/link" component = {Link}/>
      <Route exact path = "*" component = {NotFound} />
    </Switch>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(
    routes, document.getElementById('app')
  );
});
