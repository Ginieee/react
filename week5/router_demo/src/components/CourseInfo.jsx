import React from 'react';
import {useParams} from 'react-router-dom' 

function CourseInfo(props) {

    const {title} = useParams(); //라우트 :뒤에 설정한 이름과 일치해야 함?

    return (
        <div>
            <span>강의제목 : </span>
            <span>{title}</span>
        </div>
    );
}

export default CourseInfo;