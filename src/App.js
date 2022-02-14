import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './containers/home/Home';
import Footer from './components/footer/Footer';
import Stories from './containers/stories/Stories';
import Features from './containers/features/Features';
import Pricing from './containers/pricing/Pricing';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='stories' element={<Stories />} />
        <Route path='features' element={<Features />} />
        <Route path='pricing' element={<Pricing />} />
      </Routes>
      
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
