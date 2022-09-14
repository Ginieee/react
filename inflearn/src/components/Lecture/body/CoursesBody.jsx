import React from 'react';
import CoursesBodyFooter from './CoursesBodyFooter';
import CoursesBodyHeader from './CoursesBodyHeader';
import CoursesBodyMain from './CoursesBodyMain';

function CoursesBody(props) {
    return (
        <div className='column courses_body'>
            <CoursesBodyHeader/>
            <CoursesBodyMain/>
            <CoursesBodyFooter/>
        </div>
    );
}

export default CoursesBody;