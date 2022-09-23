import React from 'react';
import PanelLeft from './PanelLeft';
import PanelRight from './PanelRight';

function ContentBody(props) {
    return (
        <div className='content_body'>
            <PanelLeft/>
            <PanelRight/>
        </div>
    );
}

export default ContentBody;