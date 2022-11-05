import React from 'react';
import { Link } from 'react-router-dom';
import ManyDropThird from './ManyDropThird';

function ManyDropSecond({link, text, subList}) {
    return (
        <li>
            <Link className='navbar-item' to={link}>
                {text}
            </Link>
            <ul className='navbar-dropdown is-boxed step_menu step_2'>
                {
                    subList.map((_, i)=>{
                        return(
                            <ManyDropThird
                            key={i}
                            link={subList[i].link}
                            text={subList[i].text}
                            subList={subList[i].subList}
                            />
                        );
                    })
                }
            </ul>
        </li>
    );
}

export default ManyDropSecond;