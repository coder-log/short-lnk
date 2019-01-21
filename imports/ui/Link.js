import React from 'react';

import LinksList from'./LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilter from './LinksListFilter';

export default () => {
    return (
        <div>
            <PrivateHeader title="Your Links" />
            <LinksListFilter />
            <LinksList/>
            <AddLink />
        </div>
    );
};


