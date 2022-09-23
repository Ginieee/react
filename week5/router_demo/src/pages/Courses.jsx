import React from 'react';
import {useLocation} from 'react-router-dom';

function Courses(props) {

    const {state} = useLocation();
    

    return (
        <div>
            <input type='text' value={state}/>
        </div>
    );
}

export default Courses;