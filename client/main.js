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


Tracker.autorun(()=>{
  const name = Session.get('name');
  console.log('Name: ', name)
});

Session.set('name', 'Andrew Mead');


Meteor.startup(() => {
    
  ReactDOM.render(
    routes, document.getElementById('app')
  );
});


