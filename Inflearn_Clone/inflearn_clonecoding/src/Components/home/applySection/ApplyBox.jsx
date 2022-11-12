import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';

function ApplyBox({title, text, linkSrc, buttonText}) {
    return (
        <div className='box'>
            <h2 className='subtitle is-7'>
                {title}
            </h2>
            <div className='text is-1'>
                {text}
            </div>
            <Link className='button space-inset-stretch-6 bold is-rounded'
            to={linkSrc}>
                <span>{buttonText}</span>
                <span className='icon'>
                    <i className='fas fa-arrow-right'>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </i>
                </span>
            </Link>
        </div>
    );
}

export default ApplyBox;