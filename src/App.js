
import './App.css';
import Navbar from './components/Header/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from './Pages/AboutUs';
import Features from './Pages/Features';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import LatestNews from './Pages/LatestNews';
import ReadMore from './components/ReadMore/ReadMore';

function App() {
  return (
    <div style={{overflow:"hidden"}}>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
      <Route path='/latest-news' element={<LatestNews/>}/>
      <Route path="/latest-news/read-more" element={<ReadMore/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
