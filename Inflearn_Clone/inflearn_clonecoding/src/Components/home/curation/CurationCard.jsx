import React from 'react';
import { Link } from 'react-router-dom';

function CurationCard({linkSrc, imgSrc, title, text }) {
    return (
        <div className='InfD__Card_curation curation__admin-post'>
            <Link to={linkSrc}>
                <span className='image'>
                    <section className='ac-gif ac-image curation__cover-image'>
                        <img className='ac-gif__img'
                        src={imgSrc} alt={title}/>
                    </section>
                </span>
                <div className='title is-7 is-spaced'>{title}</div>
                <div className='text is-1'>
                    {text}
                </div>
            </Link>
        </div>
    );
}

export default CurationCard;