import React from 'react';
import { Link } from 'react-router-dom';

function DropdownSubList(name, link, sublist) {
    return (
        <li>
            <Link className='navbar-item' to={link}>{name}</Link>
            <ul className='navbar-dropdown is-boxed step_menu step_3'>
                {
                    sublist.map((item)=>{
                        return(
                            <li>
                                <Link className='navbar-item' to={item.link}>{item.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </li>
    );
}

export default DropdownSubList;