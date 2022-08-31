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
                                return(
                                    <LectureCard
                                    href={data[i].href}
                                    img_src={data[i].src}
                                    title={data[i].title}
                                    instructor={data[i].instructor}
                                    rating={data[i].rating}
                                    review={data[i].review}
                                    isDel={data[i].isDel}
                                    del={data[i].del}
                                    price={data[i].price}
                                    tags={data[i].tags}
                                    isRibbon={data[i].isRibbon}
                                    ribbon={data[i].ribbon}
                                    small={data[i].small}
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