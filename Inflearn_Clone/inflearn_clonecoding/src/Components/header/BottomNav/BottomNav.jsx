import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bottomNavMoreListData } from 'Data/header/bottomNavMoreListData';
import {bottomNavContentListData} from 'Data/header/bottomNavContentListData';
import BottomNavMoreEl from './BottomNavMoreEl';
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons";
import BottomNavContentEl from './BottomNavContentEl';
import { useRecoilState } from 'recoil';
import { navMoreState } from 'recoils/NavMore'

function BottomNav(props) {

    const [navMore, setNavMore] = useRecoilState(navMoreState);

    const setMore = () => {
        setNavMore(!navMore)
    };

    return (
        <>
        <div
        onClick={setMore} 
        className={'InfD__BottomNavigation_dimmed' + (navMore ? " is_active" : "")}
        ></div>
        <nav className='InfD__BottomNavigation'>
            <div className='more_content'>
                <div className='el_list' style={{bottom:"0px"}}>
                    {
                        bottomNavMoreListData.map((item, i)=>{
                            return(
                                <BottomNavMoreEl
                                key={i}
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
                        bottomNavContentListData.map((item, i)=>{
                            return(
                                <BottomNavContentEl
                                key={i}
                                className={item.className}
                                link = {item.link}
                                iconClassName = {item.iconClassName}
                                icon={item.icon}
                                text={item.text}
                                value={item.value}
                                />
                            );
                        })
                    }
                    <div 
                    className={'el e_el__more' + (navMore ? " active" : "")}
                    onClick={setMore}
                    >
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