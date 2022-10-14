import React from 'react';
import { Link } from 'react-router-dom';
import OneDropList from './OneDropList';

function OneDrop({link, text, subList}) {

    return (
        <div className='has-dropdown is-hoverable navbar-item  icon_drop_menu'>
            <Link to={link} className='navbar-item '>
                <span>{text}</span>
            </Link>
            <div className='navbar-dropdown is-boxed is-right'>
                {
                    subList.map((_, i)=> {

                        return(
                            <OneDropList
                            key={i}
                            link={subList[i].link}
                            icon={subList[i].icon}
                            iconClassName={subList[i].iconClassName}
                            text={subList[i].text}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default OneDrop;