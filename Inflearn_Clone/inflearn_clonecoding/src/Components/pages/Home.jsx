import ApplySection from 'Components/home/applySection/ApplySection';
import GroupSection from 'Components/home/b2bGroup/GroupSection';
import Banner2 from 'Components/home/banner2/Banner2';
import Curation from 'Components/home/curation/Curation';
import FreeCourses from 'Components/home/freeCourses/FreeCourses';
import TopBanner from 'Components/home/hero/TopBanner';
import RecentRoot from 'Components/home/recentCoursesRoot/RecentRoot';
import Review from 'Components/home/review/Review';
import RoadmapRoot from 'Components/home/roadmapRoot/RoadmapRoot';
import TopSearch from 'Components/home/search/TopSearch';
import WelcomeRoot from 'Components/home/welcomeRoot/WelcomeRoot';
import React from 'react';

function Home(props) {
    return (
        <section id='pg___main' className='infD_flow'>
            <TopBanner/>
            <TopSearch/>
            <FreeCourses/>
            <WelcomeRoot/>
            <RoadmapRoot/>
            <Curation/>
            <RecentRoot/>
            <Review/>
            <Banner2/>
            <GroupSection/>
            <ApplySection/>
        </section>
    );
}

export default Home;