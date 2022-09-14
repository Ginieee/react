import React from 'react';
import RoadMapCard from './RoadMapCard';

function RoadMapBody({data}) {
    return (
        <div className='roadmap_content'>
            <div className='roadmap_cover'>
                <div className='roadmap-cards'>
                    <div className='swiper-wrapper'>
                        {
                            data.map((_,i) => {
                                return(
                                    <RoadMapCard
                                    href={data[i].href}
                                    img_src={data[i].src}
                                    title={data[i].title}
                                    author={data[i].author}
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

export default RoadMapBody;