import React from 'react';
import { Link } from 'react-router-dom';
import DropdownList from './DropdownList';

function Dropdown({className, link, text, list}) {
    return (
        <div className={className}>
            <Link to={link} className="navbar-item">
                <span>{text}</span>
            </Link>
            <ul className='navbar-dropdown is-boxed'>
                {
                    list.map((item)=> {
                        return(
                            <DropdownList
                            name={item.name}
                            link={item.link}
                            sublist={item.sublist}
                            />
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Dropdown;