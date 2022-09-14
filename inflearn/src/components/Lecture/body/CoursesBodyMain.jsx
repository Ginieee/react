import React from 'react';
import Breadcrumb from './BreadCrumb/Breadcrumb';
import CoursesContainer from './CoursesContainer/CoursesContainer';
import CoursesSearchOption from './SearchOption/CoursesSearchOption';
import CoursesTags from './Tags/CoursesTags';

function CoursesBodyMain(props) {
    return (
        <main className='courses_main'>
            <Breadcrumb/>
            <CoursesTags/>
            <CoursesSearchOption/>
            <CoursesContainer/>
        </main>
    );
}

export default CoursesBodyMain;