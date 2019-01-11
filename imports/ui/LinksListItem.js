import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';


export default class LinksListItem extends Component {
  componentDidMount() {
    const clipboard= new Clipboard(this.refs.copy);

    clipboard.on('success', () =>{
      alert ('It worked!');
    }).on('error', ()=> {
      alert('Unable to copy. Please manually copy the link.');
    })
  }
  render() {
    return (
      <div>
          <p>{this.props.url}</p>
          <p>{this.props.shortUrl}</p>
          <button ref="copy" data-clipboard-text={this.props.short}>Copy</button>
        
      </div>
    );
  }
};

LinksListItem.propTypes = {
    _id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    shortUrl: PropTypes.string.isRequired,
};