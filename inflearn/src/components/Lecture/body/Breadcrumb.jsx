import React from 'react';

function Breadcrumb(props) {
    return (
        <nav className='breadcrumb' aria-label='breadcrumbs'>
            <ul>
                <li>
                    <a href='/' className='category_link'>전체</a>
                </li>
            </ul>
        </nav>
    );
}

export default Breadcrumb;