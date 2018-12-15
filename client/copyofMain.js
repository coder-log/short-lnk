import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import Login from './../imports/ui/Login';
import Signup from './../imports/ui/Signup';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {Tracker} from 'meteor/tracker';

const authenticatedPages = ['/links'];
const unauthenticatedPages = ['/','/signup'];
const history = createBrowserHistory( );

window.browserHistory = history;

Tracker.autorun(()=>{
  isAuthenticated =  !!Meteor.user();
  const pathname = location.pathname;
  const isAuthenticatedPage = authenticatedPages.includes(pathname);
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);

  if(isAuthenticatedPage && !isAuthenticated){
    history.push('/');
  } else if(isUnauthenticatedPage && isAuthenticated) {
    history.push('/links');
  }

  console.log('isAuthenticated', isAuthenticated);
  console.log('isAuthenticatedPage', isAuthenticatedPage);
  console.log('isUnauthenticatedPage', isUnauthenticatedPage);
});

const routes = (
  <Router>
    <Switch> {/*Replace Switch to Div to see if works*/}
      <Route exact path = "/" component = {Login} />
      <Route exact path = "/signup" component = {Signup} />
      <Route exact path = "/links" component = {Link}/>
      <Route exact path = "*" component = {NotFound} />
    </Switch>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(
    routes, document.getElementById('app')
  );
});