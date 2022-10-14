import React from 'react';
import { Link } from 'react-router-dom';
import ManyDropSecond from './ManyDropSecond';

function ManyDropFirst({link, text, subList}) {
    return (
        <div className='has-dropdown is-hoverable navbar-item category_menu content--no-list-style'>
            <Link to={link} className='navbar-item'>
                <span>{text}</span>
            </Link>
            <ul className='navbar-dropdown is-boxed'>
                {
                    subList.map((_,i)=> {

                        return(
                            <ManyDropSecond
                            link={subList[i].link}
                            text={subList[i].text}
                            subList={subList[i].subList}
                            />
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default ManyDropFirst;