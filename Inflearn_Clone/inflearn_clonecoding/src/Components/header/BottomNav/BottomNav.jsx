import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bottomNavMoreListData } from 'Data/header/bottomNavMoreListData';
import {bottomNavContentListData} from 'Data/header/bottomNavContentListData';
import BottomNavMoreEl from './BottomNavMoreEl';
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons";
import BottomNavContentEl from './BottomNavContentEl';

function BottomNav(props) {
    return (
        <>
        <div className='InfD__BottomNavigation_dimmed'></div>
        <nav className='InfD__BottomNavigation'>
            <div className='more_content'>
                <div className='el_list' style={{bottom:"0px"}}>
                    {
                        bottomNavMoreListData.map((item)=>{
                            return(
                                <BottomNavMoreEl
                                link = {item.link}
                                icon = {item.icon}
                                className = {item.className}
                                text = {item.text}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className='nav_content'>
                <div className='el_list'>
                    {
                        bottomNavContentListData.map((item)=>{
                            return(
                                <BottomNavContentEl
                                className={item.className}
                                link = {item.link}
                                iconClassName = {item.iconClassName}
                                icon={item.icon}
                                text={item.text}
                                />
                            );
                        })
                    }
                    <div className='el e_el__more'>
                        <span className='icon_cover'>
                            <span className='icon'>
                                <FontAwesomeIcon className='fal fa-ellipsis-h-alt' icon={faEllipsisH}/>
                            </span>
                        </span>
                        <span className='icon_cover is_active'>
                            <span className='icon'>
                                <FontAwesomeIcon className='fal fa-ellipsis-h-alt' icon={faEllipsisH}/>
                            </span>
                        </span>
                        <div className='text is-5'>더보기</div>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}

export default BottomNav;