import { Pagination } from '@mui/material';
import { mentorCardData } from 'Data/mentors/mentorCardData';
import React, { useEffect, useState } from 'react';
import MentorCard from './MentorCard';

function MentorsRight(props) {

    const LAST_PAGE = mentorCardData.length%24 === 0 ?
        parseInt(mentorCardData.length/24) : parseInt(mentorCardData.length/24) + 1;
    const [page, setPage] = useState(1);
    const [data, setData] = useState(mentorCardData.slice(0,24));

    useEffect(()=>{
        if(page===LAST_PAGE){
            setData(mentorCardData.slice(24*(page-1)));
        } else {
            setData(mentorCardData.slice(24*(page-1), 24*(page-1)+24));
        }
    }, [page, LAST_PAGE]);

    const handlePage = (e) => {
        const nowPageInt = parseInt(e.target.outerText);
        setPage(nowPageInt);
    }

    return (
        <div className='panel_right'>
            <div className='view'>
                <div className='mentor-cards'>
                    <h2 className='visually-hidden'>멘토 리스트</h2>
                    {
                        data.map((item,i)=>{
                            return (
                                <MentorCard
                                key={'mentorCard'+i}
                                id={item.id}
                                title={item.title}
                                job={item.job}
                                time={item.time}
                                now={item.now}
                                imgSrc={item.imgSrc}
                                linkSrc={item.linkSrc}
                                mentorName={item.mentorName}
                                ratingNumber={item.ratingNumber}/>
                            );
                        })
                    }
                </div>
                <Pagination
                className='comp_paginate'
                count={LAST_PAGE}
                size="small"
                variant="outlined"
                shape="rounded"
                hideNextButton
                hidePrevButton
                onChange={handlePage}
                />
            </div>
        </div>
    );
}

export default MentorsRight;