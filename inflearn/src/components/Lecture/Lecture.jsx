import React from 'react';
import CoursesBody from './body/CoursesBody';
import Sidebar from './sidebar/Sidebar';

function Lecture(props) {
    return (
        <section id="courses_section" className='section'>
            <div className='container'>
                <div className='columns is-tablet'>
                    <Sidebar/>
                    <CoursesBody/>
                </div>
            </div>
        </section>
    );
}

export default Lecture;