import { Pagination } from '@mui/material';
import { panelRightData } from 'Data/roadmaps/panelRightData';
import React, { useState } from 'react';
import { useEffect } from 'react';
import RoadmapCard from './RoadmapCard';

function PanelRight(props) {

    const LAST_PAGE = panelRightData.length%24 === 0 ?
        parseInt(panelRightData.length/24) : parseInt(panelRightData.length/24) + 1;
    const [page, setPage] = useState(1);
    const [data, setData] = useState(panelRightData.slice(0,24));

    useEffect(()=>{
        if(page===LAST_PAGE){
            setData(panelRightData.slice(24*(page-1)));
        } else {
            setData(panelRightData.slice(24*(page-1), 24*(page-1)+24));
        }
    }, [page, LAST_PAGE]);

    const handlePage = (e) => {
        const nowPageInt = parseInt(e.target.outerText);
        setPage(nowPageInt);
    }

    return (
        <div className='panel_right'>
            <div className='view'>
                <div className='roadmaps_card is-multiline is-mobile'>
                    {
                        data.map((item,i)=>{
                            return (
                                <RoadmapCard
                                key={'panelRightData'+i}
                                linkSrc={item.linkSrc}
                                imgSrc={item.imgSrc}
                                levelText={item.levelText}
                                tagsList={item.tagsList}
                                title={item.title}
                                author={item.author}
                                lectureCnt={item.lectureCnt}
                                peopleCnt={item.peopleCnt}/>
                            )
                        })
                    }
                </div>
                <Pagination
                className='infd-pagination roadmap__pagination-cover'
                count={LAST_PAGE}
                size="small"
                variant="outlined"
                shape="rounded"
                boundaryCount={1}
                hideNextButton
                hidePrevButton
                onChange={handlePage}
                />
            </div>
        </div>
    );
}

export default PanelRight;