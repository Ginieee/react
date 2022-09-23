import SyncAlt from 'components/fontAwesome/SyncAlt';
import React from 'react';
import {accordionContentData} from 'data/NavRoadmaps/accordionContentData';
import {accordionContentDataSecond} from 'data/NavRoadmaps/accordionContentDataSecond';
import AccordionContent from './AccordionContent';

function PanelLeft(props) {
    return (
        <div className='panel_left'>
            <div className='sticky panel_left_sticky'>
                <div className='select sort_select'>
                    <select datatype='order'>
                        <option value="seq">추천순</option>
                        <option value="seq">학생수순</option>
                        <option value="seq">공유순</option>
                        <option value="seq">최신순</option>
                        <option value="seq">오래된순</option>
                    </select>
                </div>
                <nav className='accordions checkbox_accordions'>
                    <div className='accordion is-active first_accordion'>
                        <div className='accordion-header toggle'>
                            분야별
                        </div>
                        <div className='accordion-body level_accordion_body'>
                            {
                                accordionContentData.map((item)=>{
                                    return (
                                        <AccordionContent
                                        id={item.id}
                                        value={item.value}
                                        text={item.text}
                                        />
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className='accordion is-active second_accordion'>
                        <div className='accordion-header toggle'>
                            시작 레벨
                        </div>
                        <div className='accordion-body level_accordion_body'>
                            {   
                                accordionContentDataSecond.map((item)=>{
                                    return (
                                        <AccordionContent
                                        id={item.id}
                                        value={item.value}
                                        text={item.text}
                                        />
                                    );
                                })
                            }
                        </div>
                    </div>
                </nav>
                <a href='/' className='filter_reset'>
                    <SyncAlt/>
                    &nbsp;&nbsp; 필터 초기화
                </a>
            </div>
        </div>
    );
}

export default PanelLeft;