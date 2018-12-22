import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts }  from 'meteor/accounts-base';


Meteor.startup(() => {
  //code to run on server at startup

  Accounts.validateNewUser((user)=>{
    const email = user.emails[0].address;

    try {
      new SimpleSchema({
        email: {
          type: String,
          regEx: SimpleSchema.RegEx.Email
        }
      }).validate({email});
    } catch(e) {
      throw new Meteor.Error(400, e.message);
    }
    
    return true;
  });

  // const employeeSchema = new SimpleSchema ({
  //   name:{
  //     type: String,
  //     min: 1,
  //     max: 200
  //   },
  //   hourlyWage:{
  //     type: Number,
  //     min: 0
  //   },
  //   email:{
  //     type:String,
  //     regEx: SimpleSchema.RegEx.Email //this line breaks the app
  //   }

  // });


  // employeeSchema.validate({
  //   name: 'Mike',
  //   hourlyWage: 65, //if i try to validate a string instead of a number, it crash the app.
  //   email: 'mikepurple@gmail.com'   
  // });
  
});
