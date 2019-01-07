import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import '../imports/startup/simple-schema-configuration.js';

import { routes, onAuthChange}  from './../imports/routes/routes.js';

Tracker.autorun(()=>{
  const isAuthenticated =  !!Meteor.user();
  onAuthChange(isAuthenticated);  
});

Meteor.startup(() => {
    
  ReactDOM.render(
    routes, document.getElementById('app')
  );
});


