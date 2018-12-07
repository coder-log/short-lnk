import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './../imports/ui/Signup';
import Link from './../imports/ui/Link';
import { Router, Route, browserHistory} from 'react-router';


Meteor.startup(() => {
  ReactDOM.render(
    <div>
    <Signup/> 
    <Link/>
    </div>, document.getElementById('app')
  );
});
