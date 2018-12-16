import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import Login from './../imports/ui/Login';
import Signup from './../imports/ui/Signup';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';
import {Redirect, Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {Tracker} from 'meteor/tracker';

const authenticatedPages = ['/links'];
const unauthenticatedPages = ['/','/signup'];
const history = createBrowserHistory();

window.browserHistory = history;

Tracker.autorun(()=>{
  isAuthenticated =  !!Meteor.user();
  const pathname = location.pathname;
  const isAuthenticatedPage = authenticatedPages.includes(pathname);
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);

  // if (isUnauthenticatedPage && isAuthenticated) {
  //   history.push('/links');
  // } else if (isAuthenticatedPage && !isAuthenticated){
  //   history.push('/');
  // }

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
  <Router history={history}>
     <Switch>
      <Route exact path='/' render={() => Meteor.userId() ? <Redirect to='/links' /> : <Login />}/>
      <Route exact path='/links'render={() => !Meteor.userId() ? <Redirect to='/' /> : <Link />}/>
      <Route exact path='/signup' render={() => Meteor.userId() ? <Redirect to='/links' /> : <Signup />}/>
      <Route exact path='*' component={NotFound} />
    </Switch>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(
    routes, document.getElementById('app')
  );
});


