import React from 'react';
import ApplySection from './ApplySection/ApplySection';
import CoursesBody from './body/CoursesBody';
import Sidebar from './sidebar/Sidebar';

function Lecture(props) {
    return (
        <>
        <main id='main' className='sticky'>
            <section id="courses_section" className='section'>
                <div className='container'>
                    <div className='columns is-tablet'>
                        <Sidebar/>
                        <CoursesBody/>
                    </div>
                </div>
            </section>
        </main>
        <ApplySection/>
        </>
    );
}

export default Lecture;