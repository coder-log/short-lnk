import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer){
    Meteor.publish('links',function () {
        return Links.find({ userId: this.userId });
    });
}

Meteor.methods({
    greetUser(name = 'User'){
        console.log('greetUser is running');
        return `Hello ${name}!`;
    },
    addNumbers(number1, number2){
        console.log('addNumbers is running');
        
        if(typeof number1 !== 'number' ||typeof number2 !== 'number' ){
            throw new Meteor.Error('invalid-arguments', 'The arguments should be numbers')
        }
        
        return number1 + number2;
    }

});