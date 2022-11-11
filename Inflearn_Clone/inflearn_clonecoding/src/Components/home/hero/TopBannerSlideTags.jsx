import React from 'react';

function TopBannerSlideTags({tags}) {
    return (
        <div className='hero-tags'>
            {
                tags.map((_,i)=>{

                    const textColor = tags[i].textColor;
                    const bgColor = tags[i].bgColor;
                    const text = tags[i].text;

                    return (
                        <div
                        key={`heroTags` + i}
                        style={{color:textColor, backgroundColor:bgColor}}
                        >
                            {text}
                        </div>
                    );
                })
            }
        </div>
    );
}

export default TopBannerSlideTags;