import { Meteor } from 'meteor/meteor';
import React from 'react';


import Login from './../ui/Login';
import Signup from './../ui/Signup';
import Link from './../ui/Link';
import NotFound from './../ui/NotFound';
import {Redirect, Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';


const authenticatedPages = ['/links'];
const unauthenticatedPages = ['/','/signup'];
const history = createBrowserHistory();

window.browserHistory = history;

export const onAuthChange = (isAuthenticated) => {
    const pathname = location.pathname;
    const isAuthenticatedPage = authenticatedPages.includes(pathname);
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);

    if(isAuthenticatedPage && !isAuthenticated){
        history.replace('/');
    } else if(isUnauthenticatedPage && isAuthenticated) {
        history.replace('/links');
    }
};

export const routes = (
  <Router history={history}>
     <Switch>
      <Route exact path='/' render={() => Meteor.userId() ? <Redirect to='/links' /> : <Login />}/>
      <Route exact path='/links'render={() => !Meteor.userId() ? <Redirect to='/' /> : <Link />}/>
      <Route exact path='/signup' render={() => Meteor.userId() ? <Redirect to='/links' /> : <Signup />}/>
      <Route exact path='*' component={NotFound} />
    </Switch>
  </Router>
);