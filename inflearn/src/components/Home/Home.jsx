import ApplySection from 'components/Home/apply/ApplySection';
import BottomBannerSection from 'components/Home/bottomBanner/BottomBannerSection';
import CompanySection from 'components/Home/co-company/CompanySection';
import LectureSection from 'components/Home/lectureList/LectureSection';
import ReviewSection from 'components/Home/reviewScroll/ReviewSection';
import TopBanner from 'components/Home/topBanner/TopBanner';
import TopSearch from 'components/Home/topSearch/TopSearch';
import React from 'react';

function Home(props) {
    return (
        <div>
            <TopBanner/>
            <TopSearch/>
            <LectureSection/>
            <ReviewSection/>
            <BottomBannerSection/>
            <CompanySection/>
            <ApplySection/>
        </div>
    );
}

export default Home;