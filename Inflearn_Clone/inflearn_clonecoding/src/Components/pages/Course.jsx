import React from 'react';
import { useParams } from 'react-router-dom';

function Course(props) {

    const params = useParams();

    return (
        <div>
            <h2>course입니다.</h2>
            <h3>title : {params.title} 입니다.</h3>
        </div>
    );
}

export default Course;