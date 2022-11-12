import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function FooterMenu({title, maxHeightValue, subList}) {
    return (
        <div className='menu_list'>
            <div className='list_title open'>
                {title}
                <span className='is-mobile list_caret'>
                    <i className='far fa-angle-up'>
                        <FontAwesomeIcon icon={faAngleUp}/>
                    </i>
                    <i className='far fa-angle-down'>
                        <FontAwesomeIcon icon={faAngleDown}/>
                    </i>
                </span>
            </div>
            <div className='menu_sublist' style={{maxHeight:`${maxHeightValue}`}}>
                {
                    subList.map((_,i)=>{
                        return (
                            <a
                            key={'menuSublist' + i} 
                            href={subList[i].linkSrc}
                            className='list_link'>
                                {subList[i].text}
                            </a>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default FooterMenu;