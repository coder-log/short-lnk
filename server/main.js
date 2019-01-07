import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import './../imports/api/users';
import {Links} from '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  //code to run on server at startup
  WebApp.connectHandlers.use((req, res, next)=>{ 

    const _id = req.url.slice(1); // assigns variable _id the url requeste minus '/'
    const link = Links.findOne({_id}); // busca en la base de datos esa url equivale ES6 a {_id: _id}
    
    if (link) {
      res.statusCode = 302;
      res.setHeader('Location', link.url);
      res.end();
    } else{
      next();
    }
    
  });
});
