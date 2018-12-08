import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './../imports/ui/Signup';
import Link from './../imports/ui/Link';
//import { Router, Route, browserHistory} from 'react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { browserHistory } from 'react-router-dom';

const routes = (
  <Router history = {browserHistory}>
    <Route exact path='/signup' component={Signup} />
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(
    routes, document.getElementById('app')
  );
});
