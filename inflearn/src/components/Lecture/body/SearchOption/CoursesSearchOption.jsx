import React from 'react';
import CoursesFilter from './CoursesFilter';
import CoursesOrderSelect from './CoursesOrderSelect';

function CoursesSearchOption(props) {
    return (
        <div className='search-option'>
            <CoursesFilter/>
            <CoursesOrderSelect/>
        </div>
    );
}

export default CoursesSearchOption;