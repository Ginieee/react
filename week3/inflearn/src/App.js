import BottomBannerSection from "components/bottomBanner/BottomBannerSection";
import LectureSection from "components/lectureList/LectureSection";
import ReviewSection from "components/reviewScroll/ReviewSection";
import TopBanner from "components/topBanner/TopBanner";
import TopInfo from "components/topInfo/TopInfo";
import TopNav from "components/topNav/TopNav";
import TopSearch from "components/topSearch/TopSearch";

function App() {
  return (
    <div>
      <TopInfo/>
      <TopNav/>
      <TopBanner/>
      <TopSearch/>
      <LectureSection/>
      <ReviewSection/>
      <BottomBannerSection/>
    </div>
  );
}

export default App;
