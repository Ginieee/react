import React from 'react';
import {Link} from 'react-router-dom';

function Header(props) {
    return (
        <header className='header-container'>
            <div className='header-wrap'>
                <span>
                    <Link to="/" style={{color : 'white'}}>
                        로고
                    </Link>
                </span>
                <ul>
                    <li>
                    <Link to="/courses" style={{color : 'white'}}>
                        강의
                    </Link>
                    </li>
                    <li>
                    <Link to="/roadmaps" style={{color : 'white'}}>
                        로드맵
                    </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;