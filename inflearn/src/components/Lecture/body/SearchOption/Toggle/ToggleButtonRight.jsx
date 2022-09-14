import React from 'react';
import {coursesFilterBeforeData} from 'data/LectureCourses/coursesFilterData'
import {coursesFilterAfterData} from 'data/LectureCourses/coursesFilterData'
import CourseFilterItem from './CourseFilterItem';
import CourseDot from './CourseDot';

function ToggleButtonRight(props) {
    return (
        <div className='toggle-button__right'>
            {
                coursesFilterBeforeData.map((item)=> {
                    if(item.dot){
                        return(
                            <>
                                <CourseFilterItem
                                name={item.name}
                                />
                                <CourseDot/>
                            </>
                        );
                    }
                    else {
                        return(
                            <CourseFilterItem
                            name={item.name}
                            />
                        );
                    }
                })
            }
            <span className='toggle-button__right__divider'></span>
            {
                coursesFilterAfterData.map((item)=> {
                    if(item.dot){
                        return(
                            <>
                                <CourseFilterItem
                                name={item.name}
                                />
                                <CourseDot/>
                            </>
                        );
                    }
                    else {
                        return(
                            <CourseFilterItem
                            name={item.name}
                            />
                        );
                    }
                })
            }
        </div>
    );
}

export default ToggleButtonRight;