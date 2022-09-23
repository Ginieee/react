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
        </>
    );
}

export default Roadmaps;