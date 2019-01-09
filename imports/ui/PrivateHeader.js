import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class PrivateHeader extends Component {
    onLogout() {
        Accounts.logout();
     }

    render() {
        return (
        <div>
                <h1>Links Page</h1>
                <button onClick = {this.onLogout.bind(this)}>Log Out</button>
        </div>
        )
    }
}
