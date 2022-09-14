import React from 'react';

function ReadingCard({href, img_src, alt, title, text}) {
    return (
        <div className='reading_card_box'>
            <a href={href}>
                <span className='image'>
                    <section className='reading_image'>
                        <img className='ac-gif__image' src={img_src} alt={alt}/>
                    </section>
                </span>
                <div className='reading_content'>
                    <div className='title is-7 is-spaced'>
                        {title}
                    </div>
                    <div className='text is-1'>
                        {text}
                    </div>
                </div>
            </a>
            
        </div>
    );
}

export default ReadingCard;