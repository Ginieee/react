import React from 'react';
import ReadingCard from './ReadingCard';

function ReadingBody({data}) {
    return (
        <div className='content'>
            <div className='reading_container'>
                <div className='reading_wrapper'>
                    {
                        data.map((_,i) => {
                            return(
                                <ReadingCard
                                href={data[i].href}
                                img_src={data[i].src}
                                alt={data[i].alt}
                                title={data[i].title}
                                text={data[i].text}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ReadingBody;