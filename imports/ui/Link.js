import React from 'react';

import LinksList from'./LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';



export default class Link extends React.Component {

    render(){
        return (
            <div>
                <PrivateHeader />
                <LinksList/>
                <AddLink />
            </div>
        );
    }
};

