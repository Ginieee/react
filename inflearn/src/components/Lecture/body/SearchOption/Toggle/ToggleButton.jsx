import React from 'react';
import ToggleButtonLeft from './ToggleButtonLeft';
import ToggleButtonRight from './ToggleButtonRight';

function ToggleButton(props) {
    return (
        <button className='course-filter__toggle-button e-course-filter-toggle ac-button is-grey'>
            <ToggleButtonLeft/>
            <ToggleButtonRight/>
        </button>
    );
}

export default ToggleButton;