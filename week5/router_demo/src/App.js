import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseInfo from "./components/CourseInfo";
import Header from "./components/Header";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RoadMap from "./pages/RoadMap";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/courses/:title" element={<CourseInfo/>}/>
          <Route path="/roadmaps" element={<RoadMap/>}/>

          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
