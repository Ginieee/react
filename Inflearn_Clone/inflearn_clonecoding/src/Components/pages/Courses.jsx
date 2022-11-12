import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

function Courses(props) {

    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const skill = searchParams.get('skill')

    return (
        <div>
            <h2>Courses 입니다.</h2>
            <h3>{params.big} 입니다.</h3>
            <h4>{params.middle} 입니다.</h4>
            <h4>쿼리 스트링 : {skill}</h4>
        </div>
    );
}

export default Courses;