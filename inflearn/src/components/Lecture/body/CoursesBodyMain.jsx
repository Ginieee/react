import React from 'react';
import Breadcrumb from './Breadcrumb';
import CoursesSearchOption from './SearchOption/CoursesSearchOption';
import CoursesTags from './Tags/CoursesTags';

function CoursesBodyMain(props) {
    return (
        <main className='courses_main'>
            <Breadcrumb/>
            <CoursesTags/>
            <CoursesSearchOption/>
        </main>
    );
}

export default CoursesBodyMain;