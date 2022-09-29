import React from 'react';
import EmptyStar from './EmptyStar';
import FillStar from './FillStar';
import LectureRibbon from './LectureRibbon';
import TagContent from './TagContent';
import styled from 'styled-components';
import { BREAKPOINT_PC_END, BREAKPOINT_PC_START, BREAKPOINT_PHONE_SMALL_START, BREAKPOINT_PHONE_SMALL_END, BREAKPOINT_TABLET_END, BREAKPOINT_TABLET_START, minMediaQueries, mediaQueriesBetween, maxMediaQueries } from 'mediaQuery.ts';

function LectureCard({href, img_src, title, instructor, isStar, rating, review, isDel, del, price, tags, isRibbon, ribbon, small}) {
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

    const starShowing = () => {
        if(isStar){
            return (
                <div className='rating'>
                    <div className='rating_star'>
                        <div className='star_solid_box'>
                            {starCount()}
                        </div>
                    </div>
                    <span className='review_cnt'>{review}</span>
                </div>
            );
        }
        return;
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
        <LectureCardWrapper className='lecture-card'>
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
                            {starShowing()}
                        </div>
                        <div className='price'>
                            {showingDel()}
                            <span className='pay_price'>{price}</span>
                        </div>
                        <div className='tagss'>
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
        </LectureCardWrapper>
    );
}

const LectureCardWrapper = styled.div `
	margin-right: 6px;
	height: auto;
	flex-shrink: 0;
	position: relative;
	transition-property: all;
    ${minMediaQueries(BREAKPOINT_PC_START)} {
        max-width: calc((100% - 8px)/5);
    }
    ${mediaQueriesBetween(BREAKPOINT_TABLET_START, BREAKPOINT_PC_END)} {
        max-width: calc((100% - 8px)/4);
    }
    ${mediaQueriesBetween(BREAKPOINT_PHONE_SMALL_START, BREAKPOINT_TABLET_END)} {
        max-width: calc((100% - 8px)/3);
    }
    ${maxMediaQueries(BREAKPOINT_PHONE_SMALL_END)} {
        max-width: calc((100% - 8px)/2);
    }
`

export default LectureCard;