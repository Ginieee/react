import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChartLine, faList, faHouse, faRoad, faEllipsisH} from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from 'recoil';
import { navMoreState } from 'recoils/NavMore';

function BottomNavContentEl({className, link, iconClassName, icon, text}) {

    const [navMore, setNavMore] = useRecoilState(navMoreState);

    const setMore = () => {
        if(navMore){
            setNavMore(!navMore)
        }
    };

    const getIcon = () => {
        
        const iconText = icon
        
        switch(iconText) {
            case "dashboard" :
                return <FontAwesomeIcon className={iconClassName} icon={faChartLine}/>;
            case "courses" :
                return <FontAwesomeIcon className={iconClassName} icon={faList}/>;
            case "home" :
                return <FontAwesomeIcon className={iconClassName} icon={faHouse}/>;
            case "roadmaps":
                return <FontAwesomeIcon className={iconClassName} icon={faRoad}/>;
            case "more" :
                return <FontAwesomeIcon className={iconClassName} icon={faEllipsisH}/>;
            default :
            return <h6>not found</h6>
        } 
    }

    return (
        <NavLink end to={link}
        onClick={setMore}
        className={({isActive}) => ((isActive && !navMore) ? `${className} active` : `${className}`)}>
            <span className='icon_cover'>
                <span className='icon'>
                    {getIcon()}
                </span>
            </span>
            <span className='icon_cover is_active'>
                <span className='icon'>
                    {getIcon()}
                </span>
            </span>
            <div className='text is-5'>{text}</div>
        </NavLink>
    );
}

export default BottomNavContentEl;