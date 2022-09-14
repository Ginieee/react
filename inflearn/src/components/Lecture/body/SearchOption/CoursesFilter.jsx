import React from 'react';
import ToggleButton from './Toggle/ToggleButton';

function CoursesFilter(props) {
    return (
        <nav className='course-filter'>
            <div className='floating-box-wrapper e-floating-box-wrapper'>
                <ToggleButton/>
            </div>
        </nav>
    );
}

export default CoursesFilter;