import React from 'react';

function CourseFilterItem({name}) {
    return (
        <span className='course-filter__item'>
            {name}
        </span>
    );
}

export default CourseFilterItem;