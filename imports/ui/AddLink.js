import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class AddLink extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            url: ''
        };
    }

    onSubmit(e){
        const url = this.refs.url.value.trim();
        e.preventDefault();

        if (url) {
            Meteor.call('links.insert', url);
            this.refs.url.value = '';
            
        }

    }
    onChange(e) {
        this.setState({
            url:e.target.value.trim()
        });
    }
    render() {
        return (
        <div>
            <p>Add Link</p>
            <form onSubmit = {this.onSubmit.bind(this)}>
                <input 
                    type="text" 
                    ref="url" 
                    placeholder="URL" 
                    value={this.state.url}
                    onChange={this.onChange.bind(this)}/>
                <button>Add Link</button>
            </form>
        </div>
        )
    }
}
