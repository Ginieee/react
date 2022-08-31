import LectureSection from "components/lectureList/LectureSection";
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
    </div>
  );
}

export default App;
