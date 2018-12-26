import React from 'react';
import { Tracker } from 'meteor/tracker';
import { Links } from '../api/links';


export default class LinkList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            links:[]
        }
    }

    componentDidMount(){
        Tracker.autorun(()=>{
            const links = Links.find().fetch();
            this.setState({ links });
          });
        console.log('componentDidMount Links List', this.state.links);
    }
    
    componentWillUnmount(){
        console.log(' Component Will Unmount LinkList');
    }

    renderLinksListItems(){

    }


    render() {
        return(
            <div>
                <p>Link Lists</p>
                {this.renderLinksListItems()}
            </div>
        );
    }
};