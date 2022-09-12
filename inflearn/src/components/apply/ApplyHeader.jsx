import React from 'react';
import {applyHeaderData} from 'data/apply/applyHeaderData'

function ApplyHeader({title,text}) {
    return (
        <div className='header'>
            <h1 className='title is-4'>{applyHeaderData.title}</h1>
            <div className='subtext is-2'>{applyHeaderData.text}</div>
        </div>
    );
}

export default ApplyHeader;