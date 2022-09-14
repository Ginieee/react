import React from 'react';
import {tagButtonsData} from 'data/LectureCourses/tagButtonsData';
import TagButton from './TagButton';
import Ellipsis from 'components/fontAwesome/Ellipsis';
import Xmark from 'components/fontAwesome/Xmark';

function CoursesTags(props) {
    return (
        <div className='tags are-medium skills'>
            <div className='field has-addons search_skills field'>
                <div className='control'>
                    <input className='input' type="text" placeholder="기술검색"/>
                </div>
                <div className='control'>
                    <a className='button is-link e_remove_input' href='/'>
                        <Xmark/>
                    </a>
                </div>
            </div>
            {
                tagButtonsData.map((item)=>{
                    return(
                        <TagButton
                        name={item.name}
                        />
                    );
                })
            }
            <button className='tag more button'>
                <Ellipsis/>
            </button>
        </div>
    );
}

export default CoursesTags;