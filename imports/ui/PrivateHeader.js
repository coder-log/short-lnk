import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class PrivateHeader extends Component {
    constructor(props){
        super(props);
    }
    onLogout() {
        Accounts.logout();
     }

    render() {
        return (
        <div>
                <h1>{this.props.title}</h1>
                <button onClick = {this.onLogout.bind(this)}>Log Out</button>
        </div>
        );
    }
}

PrivateHeader.propTypes = {
    title: React.PropTypes.string.isRequired;
};