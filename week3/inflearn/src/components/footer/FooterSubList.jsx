import React from 'react';

function FooterSubList({href,text}) {
    return (
        <a href={href} className='list_link'>{text}</a>
    );
}

export default FooterSubList;