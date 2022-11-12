import CoursesBody from 'Components/courses/CoursesBody';
import Sidebar from 'Components/courses/Sidebar';
import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

function Courses(props) {

    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const skill = searchParams.get('skill')

    return (
        <div className='pg___courses'>
            <section id='courses_section' className='section'>
                <div className='container'>
                    <div className='columns is-tablet'>
                        <Sidebar/>
                        <CoursesBody/>
                    </div>
                </div>
                {/* <h2>Courses 입니다.</h2>
                <h3>{params.big} 입니다.</h3>
                <h4>{params.middle} 입니다.</h4>
                <h4>쿼리 스트링 : {skill}</h4> */}
            </section>
        </div>
    );
}

export default Courses;