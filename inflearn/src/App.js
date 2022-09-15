import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import Home from "components/Home/Home";
import Join from "components/Join/Join";
import Lecture from "components/Lecture/Lecture";
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/lectures" element={<Lecture/>} />
        <Route path="/join" element={<Join/>} />
        <Route path="/">Not found</Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
