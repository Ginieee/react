import React from 'react';
import CoursesBodyHeader from './CoursesBodyHeader';
import CoursesBodyMain from './CoursesBodyMain';

function CoursesBody(props) {
    return (
        <div className='column courses_body'>
            <CoursesBodyHeader/>
            <CoursesBodyMain/>
        </div>
    );
}

export default CoursesBody;