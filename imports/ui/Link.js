import React from 'react';
import { withRouter } from 'react-router-dom';
import {createBrowserHistory} from 'history';

export default class Link extends React.Component {
    onLogout() {
        const history = createBrowserHistory({forceRefresh:true});
        history.push('/');
    }
    render(){
        return (
            <div>
                <h1>Links Page</h1>
                <button onClick = {this.onLogout.bind(this)}>Log Out</button>
            </div>
        );
    }
};

