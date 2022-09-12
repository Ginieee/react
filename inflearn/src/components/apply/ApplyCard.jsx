import ArrowRight from 'components/fontAwesome/ArrowRight';
import React from 'react';

function ApplyCard({title, text, href,btn_text}) {
    return (
        <div className='apply-card-box'>
            <h2 className='subtitle is-7'>{title}</h2>
            <div className='text is-1'>
                {text}
            </div>
            <a className='apply-card-button' href={href}>
                <span>{btn_text}</span>
                <span className='spanIcon'>
                    <ArrowRight/>
                </span>
            </a>
        </div>
    );
}

export default ApplyCard;