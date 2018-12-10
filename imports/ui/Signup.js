import React from 'react';
import {Link} from 'react-router-dom';

export default class Signup extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        count:0
      };
    }
    increment(){
      this.setState ({
        count: this.state.count + 1
      });
    }
    render(){
      return (
      <div>
        <h1>Sign Up to Short Lnk</h1>
        <p>{this.state.count}</p>
        <button onClick={this.increment.bind(this)}>+1</button>
        <Link to="/">Already have an account?</Link>
      </div>
      );
    }
  };