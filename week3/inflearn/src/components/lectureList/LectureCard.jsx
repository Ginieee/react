import React from 'react';
import EmptyStar from './EmptyStar';
import FillStar from './FillStar';
import LectureRibbon from './LectureRibbon';
import TagContent from './TagContent';

function LectureCard({href, img_src, title, instructor, rating, review, isDel, del, price, tags, isRibbon, ribbon, small}) {
    const starCount = () => {
        const result=[]
        const fill = rating / 1;
        const empty = 5 - fill;
        for(let i=0; i<fill;i++){
            result.push(<FillStar/>);
        }
        for(let j=0;j<empty;j++){
            result.push(<EmptyStar/>);
        }
        return result;
    }

    const showingDel = () => {
        if(isDel){
            return (<del>{del}</del>);
        }
        return;
    }

    const showingRibbon = () => {
        if(isRibbon){
            return (<LectureRibbon text={ribbon} small={small}/>);
        }
        return;
    }

    return (
        <div className='lecture-card'>
            <div className='lecture-card-conatiner card'>
                <a className='course_card_front' href={href}>
                    <div className='card-image is_thumbnail image'>
                        <img loading='lazy' src={img_src} className="card-image-content" alt='이미지'/>
                        <div className='onload_placeholder'></div>
                        <div className='swiper-lazy-preloader'></div>
                        {showingRibbon()}
                    </div>
                    <div className='card-content'>
                        <div className='course_title'>{title}</div>
                        <div className='instructor'>{instructor}</div>
                        <div className='rating'>
                            <div className='rating_star'>
                                <div className='star_solid_box'>
                                    {starCount()}
                                </div>
                            </div>
                            <span className='review_cnt'>{review}</span>
                        </div>
                        <div className='price'>
                            {showingDel()}
                            <span className='pay_price'>{price}</span>
                        </div>
                        <div className='tags'>
                            {
                                tags.map((_,i) => {
                                    return(
                                        <TagContent
                                        backgroundColor={tags[i].backgroundColor}
                                        text={tags[i].text}
                                        />
                                    );
                                })
                            }
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default LectureCard;