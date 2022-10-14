import React from 'react';
import { Link } from 'react-router-dom';

function SubNav({link, text}) {
    return (
        <div className='navbar-item'>
            <Link to={link} className='navbar-item'>
                <span>{text}</span>
            </Link>
        </div>
    );
}

export default SubNav;