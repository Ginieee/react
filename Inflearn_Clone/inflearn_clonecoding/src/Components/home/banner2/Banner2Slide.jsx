import React from 'react';
import { Link } from 'react-router-dom';

function Banner2Slide({h1Color, title, linkSrc, buttonText}) {
    return (
        <div className='container'>
            <h1 className='title is-7'>
                <span style={{color:`${h1Color}`}}>
                    {title}
                </span>
            </h1>
            <Link className='button space-inset-stretch-6 bold subtext is-1' to={linkSrc}>
                {buttonText}
            </Link>
        </div>
    );
}

export default Banner2Slide;