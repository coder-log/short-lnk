import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

import { routes, onAuthChange}  from './../imports/routes/routes.js';

Tracker.autorun(()=>{
  const isAuthenticated =  !!Meteor.user();
  onAuthChange(isAuthenticated);  
});

Meteor.startup(() => {
  Meteor.call('greetUser', 'Mike', (err,res)=>{
    console.log('Greet user args', err, res);
  });
  Meteor.call('addNumbers', 3, 4, (err, res)=>{
    console.log('addNumbers arguments', err, res);
    
  });
  ReactDOM.render(
    routes, document.getElementById('app')
  );
});


