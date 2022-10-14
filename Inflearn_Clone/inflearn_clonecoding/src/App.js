import Layout from "Components/layout/Layout";
import Community from "Components/pages/Community";
import Courses from "Components/pages/Courses";
import Home from "Components/pages/Home";
import Mentors from "Components/pages/Mentors";
import NotFound from "Components/pages/NotFound";
import OpenKnowledge from "Components/pages/OpenKnowledge";
import Roadmaps from "Components/pages/Roadmaps";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/roadmaps" element={<Roadmaps/>}/>
          <Route path="/mentors" element={<Mentors/>}/>
          <Route path="/community" element={<Community/>}/>
          <Route path="/open-knowledge" element={<OpenKnowledge/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
