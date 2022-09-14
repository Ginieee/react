import React from 'react';
import {applySectionData} from 'data/LectureCourses/applySectionData';
import CoursesApplyCard from './CoursesApplyCard';

function ApplySection(props) {
    return (
        <section className='apply_section'>
            <div className='wrapper'>
                {
                    applySectionData.map((item)=>{
                        return(
                            <CoursesApplyCard
                            title={item.title}
                            text={item.text}
                            button={item.button}
                            />
                        );
                    })
                }
            </div>
        </section>
    );
}

export default ApplySection;