import React from 'react';
import {headerData} from 'data/lectureList/headerData';
import LectureHeader from './LectureHeader';

function LectureSection(props) {
    return (
        <section className='lecture'>
            <div className='container-pd10'>
                <div className='main-course-list'>
                    {
                        headerData.map((_, i) => {
                            return(
                                <LectureHeader
                                href={headerData[i].href}
                                title={headerData[i].title}
                                text={headerData[i].text}
                                cardList={headerData[i].card}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default LectureSection;