import React from 'react';

function FooterLi({num}) {
    return (
        <li>
            <a className='pagination-link' aria-label={{num}+'페이지로 이동'} href='/'>{num}</a>
        </li>
    );
}

export default FooterLi;