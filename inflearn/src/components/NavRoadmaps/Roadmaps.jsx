import ApplySection from 'components/Lecture/ApplySection/ApplySection';
import React from 'react';
import RoadmapsMain from './RoadmapsMain';
import TopInputBanner from './TopInputBanner';

function Roadmaps(props) {
    return (
        <>
        <main id='main'>
            <section className='roadmap_list_section'>
                <TopInputBanner/>
                <RoadmapsMain/>
            </section>
        </main>
        <ApplySection/>
        </>
    );
}

export default Roadmaps;