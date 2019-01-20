import { Meteor } from 'meteor/meteor';
import {Session} from 'meteor/session';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import '../imports/startup/simple-schema-configuration.js';

import { routes, onAuthChange}  from './../imports/routes/routes.js';

Tracker.autorun(()=>{
  const isAuthenticated =  !!Meteor.user();
  onAuthChange(isAuthenticated);  
});


Meteor.startup(() => {
  Session.set('showVisible', true);
  ReactDOM.render(
    routes, document.getElementById('app')
  );
});


