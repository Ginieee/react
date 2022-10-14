import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faBullhorn, faFeatherAlt, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmile, faPaperPlane, faLightbulb, faStar, faCommentDots, faPenToSquare } from '@fortawesome/free-regular-svg-icons'

function OneDropList({link, icon, iconClassName, text}) {

    const getIcon = () => {
        
        const iconText = icon

        switch(iconText){
            case "questions" :
                return <FontAwesomeIcon className={iconClassName} icon={faPenToSquare}/>;
            case "chats" :
                return <FontAwesomeIcon className={iconClassName} icon={faCommentDots}/>;
            case "studies" :
                return <FontAwesomeIcon className={iconClassName} icon={faBookOpen}/>;
            case "blogs" :
                return <FontAwesomeIcon className={iconClassName} icon={faFeatherAlt}/>;
            case "reviews" :
                return <FontAwesomeIcon className={iconClassName} icon={faStar}/>;
            case "mentoringReviews" :
                return <FontAwesomeIcon className={iconClassName} icon={faLightbulb}/>;
            case "notices" :
                return <FontAwesomeIcon className={iconClassName} icon={faBullhorn}/>;
            case "pages" :
                return <FontAwesomeIcon className={iconClassName} icon={faPaperPlane}/>;
            case "inflearn" :
                return <FontAwesomeIcon className={iconClassName} icon={faLeaf}/>;
            case "request" :
                return <FontAwesomeIcon className={iconClassName} icon={faFaceSmile}/>;
            default :
                return <h6>not found</h6>;

        }
    }

    return (
        <Link to={link} className='navbar-item '>
            <span className='icon'>
                <i className={iconClassName}>
                    {getIcon()}
                </i>
            </span>
            <span className='name'>{text}</span>
        </Link>
    );
}

export default OneDropList;