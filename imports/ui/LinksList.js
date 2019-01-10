import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Tracker } from 'meteor/tracker';
import { Links } from '../api/links';
import { LinksListItem } from './LinksListItem';


export default class LinksList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            links:[]
        }
    }

    componentDidMount(){
        this.linksTracker = Tracker.autorun(()=>{
            const links = Links.find().fetch();
            Meteor.subscribe('links');
            this.setState({ links });
          });
        console.log('componentDidMount Links List', this.state.links);
    }
    
    componentWillUnmount(){
        this.linksTracker.stop();
        console.log(' Component Will Unmount LinkList');
    }

    renderLinksListItems(){
        return this.state.links.map((link) => {
            const shortUrl = Meteor.absoluteUrl(link._id);
            return <LinksListItem key={link._id} shortUrl = {shortUrl} {...link} />
            {/* //<p key={link._id} link={link}>{link.url}</p>; */}
        });

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