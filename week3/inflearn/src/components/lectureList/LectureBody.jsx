import React from 'react';
import LectureCard from './LectureCard';

function LectureBody({data}) {
    return (
        <div className='lecture-course-content'>
            <div className='lecture-cover'>
                <div className='lecture-cards'>
                    <div className='swiper-wrapper'>
                        {
                            data.map((_,i) => {
                                const tags = data[i].tags
                                return(
                                    <LectureCard
                                    href={data[i].href}
                                    img_src={data[i].src}
                                    title={data[i].title}
                                    instructor={data[i].instructor}
                                    review={data[i].review}
                                    price={data[i].price}
                                    tags={tags}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LectureBody;