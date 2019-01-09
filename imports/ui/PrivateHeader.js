import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'prop-types';

// export default class PrivateHeader extends Component {
//     constructor(props){
//         super(props);
//     }
//     onLogout() {
//         Accounts.logout();
//      }

//     render() {
//         return (
//         <div>
//                 <h1>{this.props.title}</h1>
//                 <button onClick = {this.onLogout.bind(this)}>Log Out</button>
//         </div>
//         );
//     }
// }

const PrivateHeader = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick = {()=>Accounts.logout()}>Log Out</button>
        </div>
    );
};

PrivateHeader.propTypes = {
    title: PropTypes.string.isRequired
};

export default PrivateHeader;