import React from 'react';
import { Link } from 'react-router-dom';
import DropdownSubList from './DropdownSubList';

function DropdownList({name, link, sublist}) {
    return (
        <li>
            <Link className='navbar-item' to={link}>{name}</Link>
            <ul className='navbar-dropdown is-boxed step_menu step_2'>
                {
                    sublist.map((item)=>{
                        return(
                            <DropdownSubList
                            name={item.name}
                            link={item.link}
                            sublist={item.sublist}
                            />
                        );
                    })
                }
            </ul>
        </li>
    );
}

export default DropdownList;