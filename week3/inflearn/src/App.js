import ApplySection from "components/apply/ApplySection";
import BottomBannerSection from "components/bottomBanner/BottomBannerSection";
import CompanySection from "components/co-company/CompanySection";
import Footer from "components/footer/Footer";
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
      <CompanySection/>
      <ApplySection/>
      <Footer/>
    </div>
  );
}

export default App;
