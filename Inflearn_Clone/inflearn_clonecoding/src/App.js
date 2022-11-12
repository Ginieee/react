import Layout from "Components/layout/Layout";
import Blogs from "Components/pages/Blogs";
import Community from "Components/pages/Community";
import Courses from "Components/pages/Courses";
import Home from "Components/pages/Home";
import Inflearn from "Components/pages/Inflearn";
import Mentors from "Components/pages/Mentors";
import NotFound from "Components/pages/NotFound";
import Notices from "Components/pages/Notices";
import OpenKnowledge from "Components/pages/OpenKnowledge";
import Pages from "Components/pages/Pages";
import Roadmaps from "Components/pages/Roadmaps";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequestToInflearn from "Components/pages/RequestToInflearn";
import Dashboard from "Components/pages/Dashboard";
import Course from "Components/pages/Course";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/course/:title" element={<Course/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/courses/:big" element={<Courses/>}/>
          <Route path="/courses/:big/:middle" element={<Courses/>}/>
          <Route path="/roadmaps" element={<Roadmaps/>}/>
          <Route path="/roadmaps/:idx" element={<Roadmaps/>}/>
          <Route path="/mentors" element={<Mentors/>}/>
          <Route path="/community/:content" element={<Community/>}/>
          <Route path="/open-knowledge" element={<OpenKnowledge/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/notices" element={<Notices/>}/>
          <Route path="/pages" element={<Pages/>}/>
          <Route path="/pages/:title" element={<Pages/>}/>
          <Route path="/inflearn" element={<Inflearn/>}/>
          <Route path="/request-to-inflearn" element={<RequestToInflearn/>}/>
          <Route path="/account/dashboard" element={<Dashboard/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
