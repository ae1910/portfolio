import './css/App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";// import mainVideo from "./img/topnewsMain.mp4";
import Header from "./components/header";
import Home from "./pages/index";
import Work from "./pages/work";
import Work1 from "./pages/work1";
import Work2 from "./pages/work2";
import Work3 from "./pages/work3";
import Work4 from "./pages/work4";
import Work5 from "./pages/work5";
import Footer from "./components/footer";

function App() {
  
  return (
    <Router basename='/portfolio'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/work/:work-name' element={<Work />}/>
        <Route path='/pet-gallery' element={<Work5 />}/>
        <Route path='/topnews' element={<Work1 />}/>
        <Route path='/niks' element={<Work2 />}/>
        <Route path='/glassify' element={<Work3 />}/>
        <Route path='/inflation' element={<Work4 />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
