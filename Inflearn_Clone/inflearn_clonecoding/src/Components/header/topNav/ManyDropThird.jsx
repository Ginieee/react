import React from 'react';
import { Link } from 'react-router-dom';

function ManyDropThird({link, text, subList}) {
    return (
        <li>
            <Link className='navbar-item' to={link}>
                {text}
            </Link>
            <ul className='navbar-dropdown is-boxed step_menu step_3'>
                {
                    subList.map((_,i)=>{
                        return(
                            <li>
                                <Link className='navbar-item' to={subList[i].link}>
                                    {subList[i].text}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </li>
    );
}

export default ManyDropThird;